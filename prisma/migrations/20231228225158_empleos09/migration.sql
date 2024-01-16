/*
  Warnings:

  - You are about to drop the column `birthDate` on the `ProfileAssessment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProfileAssessment" DROP COLUMN "birthDate",
ADD COLUMN     "edad" TEXT;
