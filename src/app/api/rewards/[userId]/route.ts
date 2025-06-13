import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: Request,
  context: { params: { userId: string } }
) {
  try {
    const userId = context.params.userId;
    console.log('Fetching rewards for userId:', userId);

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    // First, check if the user exists
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    console.log('Found user:', user);

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Then, fetch the rewards with basic merchant info
    const rewards = await prisma.reward.findMany({
      where: {
        userId: userId,
      },
      include: {
        merchant: {
          include: {
            referringTo: {
              select: {
                id: true,
                name: true,
                location: true,
                rewardGoal: true,
                rewardDescription: true,
                activePromos: true,
              }
            }
          }
        }
      }
    });

    console.log('Found rewards:', JSON.stringify(rewards, null, 2));

    if (!rewards || rewards.length === 0) {
      return NextResponse.json(
        { error: 'No rewards found' },
        { status: 404 }
      );
    }

    // Log detailed referral data for debugging
    for (const reward of rewards) {
      console.log(`\nMerchant ${reward.merchant.name} referral details:`);
      console.log('Merchant ID:', reward.merchant.id);
      console.log('Referring to:', reward.merchant.referringTo);
      
      // Query the _MerchantReferrals table directly
      const referralRelations = await prisma.$queryRaw`
        SELECT * FROM "_MerchantReferrals"
        WHERE "A" = ${reward.merchant.id} OR "B" = ${reward.merchant.id}
      `;
      console.log('Raw referral relations:', referralRelations);
    }

    return NextResponse.json(rewards);
  } catch (error) {
    console.error('Error fetching rewards:', error);
    return NextResponse.json(
      { error: 'Failed to fetch rewards' },
      { status: 500 }
    );
  }
} 