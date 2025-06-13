import { PrismaClient } from '../src/generated/prisma';
import type { Merchant } from '../src/generated/prisma';

const prisma = new PrismaClient();

async function main() {
  // Create Peach Studio
  const peachStudio = await prisma.merchant.upsert({
    where: { nfcTagId: 'peach-studio-tag' },
    update: {},
    create: {
      name: 'Peach Studio',
      location: '456 Art Avenue',
      nfcTagId: 'peach-studio-tag',
      rewardGoal: 5,
      rewardDescription: 'Free art class after 5 visits',
      activePromos: [
        {
          title: 'Creative Mornings',
          description: 'Get 20% off your first art class when referred by Cafe Luna',
          code: 'LUNART20'
        }
      ]
    }
  });
  console.log('Created/Updated Peach Studio:', peachStudio);

  // Create Green Juice Bar
  const greenJuice = await prisma.merchant.upsert({
    where: { nfcTagId: 'green-juice-tag' },
    update: {},
    create: {
      name: 'Green Juice Bar',
      location: '789 Health Lane',
      nfcTagId: 'green-juice-tag',
      rewardGoal: 8,
      rewardDescription: 'Free superfood smoothie after 8 visits',
      activePromos: [
        {
          title: 'Wellness Bundle',
          description: 'Buy any juice, get 50% off at Yoga Flow',
          code: 'JUICEFLOW'
        }
      ]
    }
  });
  console.log('Created/Updated Green Juice Bar:', greenJuice);

  // Create Yoga Flow
  const yogaFlow = await prisma.merchant.upsert({
    where: { nfcTagId: 'yoga-flow-tag' },
    update: {},
    create: {
      name: 'Yoga Flow',
      location: '101 Zen Street',
      nfcTagId: 'yoga-flow-tag',
      rewardGoal: 12,
      rewardDescription: 'Free month of unlimited yoga after 12 visits',
      activePromos: [
        {
          title: 'Morning Zen',
          description: 'Show your Green Juice receipt for 25% off morning classes',
          code: 'ZENMORNING'
        }
      ]
    }
  });
  console.log('Created/Updated Yoga Flow:', yogaFlow);

  // Create or get Cafe Luna
  const cafeLuna = await prisma.merchant.upsert({
    where: { nfcTagId: 'test-nfc-tag-1' },
    update: {},
    create: {
      name: 'Cafe Luna',
      location: '123 Coffee Street',
      nfcTagId: 'test-nfc-tag-1',
      rewardGoal: 10,
      rewardDescription: 'Free coffee after 10 visits',
      activePromos: [
        {
          title: 'Art & Coffee',
          description: 'Get 15% off at Peach Studio with any coffee purchase',
          code: 'COFFEE2ART'
        }
      ]
    }
  });
  console.log('Created/Updated Cafe Luna:', cafeLuna);

  // Update Cafe Luna with referral promos
  const updatedCafeLuna = await prisma.merchant.update({
    where: { id: cafeLuna.id },
    data: {
      activePromos: [
        {
          title: 'Art & Coffee',
          description: 'Get 15% off at Peach Studio with any coffee purchase',
          code: 'COFFEE2ART'
        }
      ],
      referringTo: {
        connect: [
          { id: peachStudio.id },
          { id: greenJuice.id }
        ]
      }
    },
    include: {
      referringTo: true
    }
  });
  console.log('Updated Cafe Luna with referrals:', updatedCafeLuna);

  // Set up cross-referrals
  const updatedGreenJuice = await prisma.merchant.update({
    where: { id: greenJuice.id },
    data: {
      referringTo: {
        connect: [
          { id: yogaFlow.id }
        ]
      }
    },
    include: {
      referringTo: true
    }
  });
  console.log('Updated Green Juice with referrals:', updatedGreenJuice);

  const updatedYogaFlow = await prisma.merchant.update({
    where: { id: yogaFlow.id },
    data: {
      referringTo: {
        connect: [
          { id: greenJuice.id }
        ]
      }
    },
    include: {
      referringTo: true
    }
  });
  console.log('Updated Yoga Flow with referrals:', updatedYogaFlow);

  // Verify all referral relationships
  const allMerchants = await prisma.merchant.findMany({
    include: {
      referringTo: true,
      referredBy: true
    }
  });
  
  console.log('\nFinal referral relationships:');
  allMerchants.forEach((merchant: Merchant & { referringTo: Merchant[]; referredBy: Merchant[] }) => {
    console.log(`\n${merchant.name}:`);
    console.log('Referring to:', merchant.referringTo.map((m: Merchant) => m.name));
    console.log('Referred by:', merchant.referredBy.map((m: Merchant) => m.name));
  });

  console.log('\nSeed completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 