import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Delete all existing data
  await prisma.reward.deleteMany()
  await prisma.checkin.deleteMany()
  await prisma.user.deleteMany()
  await prisma.merchant.deleteMany()
  console.log('Deleted all existing data')

  // Create test merchant
  const merchant = await prisma.merchant.create({
    data: {
      name: "Test Merchant",
      location: "Test Location",
      nfcTagId: "test-nfc-tag-1",
      rewardGoal: 10,
      rewardDescription: "Free coffee after 10 check-ins",
      activePromos: [],
    },
  })
  console.log('Created test merchant:', merchant)

  // Create test user
  const user = await prisma.user.create({
    data: {
      name: "Test User",
      phoneNumber: "+1234567890",
      birthday: new Date("1990-01-01"),
    },
  })
  console.log('Created test user:', user)

  // Create test checkins
  const checkins = await Promise.all([
    prisma.checkin.create({
      data: {
        userId: user.id,
        merchantId: merchant.id,
        timestamp: new Date(),
      },
    }),
    prisma.checkin.create({
      data: {
        userId: user.id,
        merchantId: merchant.id,
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
      },
    }),
  ])
  console.log('Created test checkins:', checkins)

  // Create test reward
  const reward = await prisma.reward.create({
    data: {
      userId: user.id,
      merchantId: merchant.id,
      progress: 2, // 2 checkins
      rewardClaimed: false,
    },
  })
  console.log('Created test reward:', reward)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 