import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';

const checkinSchema = z.object({
  name: z.string().min(2),
  phoneNumber: z.string()
    .refine(
      (val) => {
        // Accept either (XXX)XXX-XXXX or +1XXXXXXXXXX format
        return /^\(\d{3}\)\d{3}-\d{4}$/.test(val) || /^\+1\d{10}$/.test(val);
      },
      'Phone number must be in (XXX)XXX-XXXX or +1XXXXXXXXXX format'
    )
    .transform((val) => {
      // If already in +1XXXXXXXXXX format, return as is
      if (val.startsWith('+1')) return val;
      // Convert (XXX)XXX-XXXX to +1XXXXXXXXXX
      const digits = val.replace(/\D/g, '');
      return `+1${digits}`;
    }),
  birthday: z.string().optional(),
  nfcTagId: z.string(),
});

export async function POST(request: Request) {
  // Add CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle preflight requests
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, { headers });
  }

  try {
    console.log('Received check-in request');
    const body = await request.json();
    console.log('Request body:', body);
    
    const { name, phoneNumber, birthday, nfcTagId } = checkinSchema.parse(body);
    console.log('Validated data:', { name, phoneNumber, birthday, nfcTagId });

    // Find the merchant by NFC tag ID
    console.log('Looking for merchant with NFC tag ID:', nfcTagId);
    const merchant = await prisma.merchant.findUnique({
      where: { nfcTagId },
    });
    console.log('Found merchant:', merchant);

    if (!merchant) {
      console.log('Merchant not found for NFC tag ID:', nfcTagId);
      return NextResponse.json(
        { error: 'Merchant not found' },
        { status: 404, headers }
      );
    }

    // Find or create user
    let user = await prisma.user.findUnique({
      where: { phoneNumber },
    });
    console.log('Found existing user:', user);

    if (!user) {
      console.log('Creating new user');
      const userData = {
        name,
        phoneNumber,
        birthday: birthday || null,
      };
      console.log('Creating user with data:', userData);
      try {
        user = await prisma.user.create({
          data: userData,
        });
        console.log('Created new user:', user);
      } catch (error) {
        console.error('Error creating user:', error);
        return NextResponse.json(
          { error: 'Failed to create user', details: error instanceof Error ? error.message : String(error) },
          { status: 500, headers }
        );
      }
    }

    // Create checkin
    console.log('Creating check-in');
    try {
      const checkin = await prisma.checkin.create({
        data: {
          userId: user.id,
          merchantId: merchant.id,
        },
      });
      console.log('Created check-in:', checkin);

      // Find or create reward progress
      let reward = await prisma.reward.findFirst({
        where: {
          userId: user.id,
          merchantId: merchant.id,
        },
      });
      console.log('Found existing reward:', reward);

      if (!reward) {
        console.log('Creating new reward');
        reward = await prisma.reward.create({
          data: {
            userId: user.id,
            merchantId: merchant.id,
            progress: 1,
          },
        });
        console.log('Created new reward:', reward);
      } else {
        console.log('Updating existing reward');
        reward = await prisma.reward.update({
          where: { id: reward.id },
          data: {
            progress: {
              increment: 1,
            },
          },
        });
        console.log('Updated reward:', reward);
      }

      return NextResponse.json({
        userId: user.id,
        checkinId: checkin.id,
        rewardProgress: reward.progress,
        rewardGoal: merchant.rewardGoal,
      }, { headers });
    } catch (error) {
      console.error('Error creating check-in or reward:', error);
      return NextResponse.json(
        { error: 'Failed to create check-in', details: error instanceof Error ? error.message : String(error) },
        { status: 500, headers }
      );
    }
  } catch (error) {
    console.error('Checkin error:', error);
    
    if (error instanceof z.ZodError) {
      console.error('Validation error:', error.errors);
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400, headers }
      );
    }
    
    // Log the full error details
    console.error('Full error details:', {
      name: error instanceof Error ? error.name : 'Unknown',
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });
    
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : String(error) },
      { status: 500, headers }
    );
  }
} 