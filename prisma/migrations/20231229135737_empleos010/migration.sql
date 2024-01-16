/*
  Warnings:

  - You are about to drop the column `answer` on the `KnowledgeAssessment` table. All the data in the column will be lost.
  - You are about to drop the column `answer` on the `LanguageAssessment` table. All the data in the column will be lost.
  - You are about to drop the column `birthDate` on the `ProfileAnswer` table. All the data in the column will be lost.
  - You are about to drop the column `answer` on the `ProfileParticulars` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "KnowledgeAssessment" DROP COLUMN "answer",
ADD COLUMN     "answerKnow" TEXT;

-- AlterTable
ALTER TABLE "LanguageAssessment" DROP COLUMN "answer",
ADD COLUMN     "answerLan" TEXT;

-- AlterTable
ALTER TABLE "ProfileAnswer" DROP COLUMN "birthDate",
ADD COLUMN     "edad" TEXT;

-- AlterTable
ALTER TABLE "ProfileParticulars" DROP COLUMN "answer",
ADD COLUMN     "answerProf" TEXT;
