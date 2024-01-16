/*
  Warnings:

  - You are about to drop the column `translationAbility` on the `Language` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Language" DROP COLUMN "translationAbility",
ADD COLUMN     "level" TEXT;
