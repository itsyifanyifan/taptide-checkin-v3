-- DropIndex
DROP INDEX "Checkin_merchantId_idx";

-- DropIndex
DROP INDEX "Checkin_userId_idx";

-- DropIndex
DROP INDEX "Reward_merchantId_idx";

-- DropIndex
DROP INDEX "Reward_userId_idx";

-- DropIndex
DROP INDEX "Reward_userId_merchantId_key";

-- AlterTable
ALTER TABLE "Reward" ALTER COLUMN "progress" SET DEFAULT 1;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "birthday" SET DATA TYPE TEXT;
