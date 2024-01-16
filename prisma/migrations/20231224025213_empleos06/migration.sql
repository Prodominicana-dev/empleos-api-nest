/*
  Warnings:

  - You are about to drop the column `relativeWork` on the `Profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "relativeWork",
ADD COLUMN     "relationshipWork" TEXT;

-- AlterTable
ALTER TABLE "Subscription" ALTER COLUMN "name" DROP NOT NULL;
