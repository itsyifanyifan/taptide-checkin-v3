import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  try {
    if (!params.userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    console.log('Fetching rewards for user:', params.userId);
    
    const rewards = await prisma.reward.findMany({
      where: {
        userId: params.userId,
      },
      include: {
        merchant: {
          select: {
            id: true,
            name: true,
            location: true,
            rewardGoal: true,
            rewardDescription: true,
            activePromos: true,
          },
        },
      },
    });
    console.log('Found rewards:', rewards);

    return NextResponse.json(rewards);
  } catch (error) {
    console.error('Error fetching rewards:', error);
    return NextResponse.json(
      { error: 'Failed to fetch rewards' },
      { status: 500 }
    );
  }
} 