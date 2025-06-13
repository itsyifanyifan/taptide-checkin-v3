import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';

const checkinSchema = z.object({
  name: z.string().min(2),
  phoneNumber: z.string().regex(/^\(\d{3}\)\d{3}-\d{4}$/, 'Phone number must be in (XXX)XXX-XXXX format'),
  birthday: z.string().optional(),
  nfcTagId: z.string(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phoneNumber, birthday, nfcTagId } = checkinSchema.parse(body);

    // Find the merchant by NFC tag ID
    const merchant = await prisma.merchant.findUnique({
      where: { nfcTagId },
    });

    if (!merchant) {
      return NextResponse.json(
        { error: 'Merchant not found' },
        { status: 404 }
      );
    }

    // Find or create user
    let user = await prisma.user.findUnique({
      where: { phoneNumber },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          name,
          phoneNumber,
          birthday,
        },
      });
    }

    // Create checkin
    const checkin = await prisma.checkin.create({
      data: {
        userId: user.id,
        merchantId: merchant.id,
      },
    });

    // Find or create reward progress
    let reward = await prisma.reward.findFirst({
      where: {
        userId: user.id,
        merchantId: merchant.id,
      },
    });

    if (!reward) {
      reward = await prisma.reward.create({
        data: {
          userId: user.id,
          merchantId: merchant.id,
          progress: 1,
        },
      });
    } else {
      reward = await prisma.reward.update({
        where: { id: reward.id },
        data: {
          progress: {
            increment: 1,
          },
        },
      });
    }

    return NextResponse.json({
      userId: user.id,
      checkinId: checkin.id,
      rewardProgress: reward.progress,
      rewardGoal: merchant.rewardGoal,
    });
  } catch (error) {
    console.error('Checkin error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 