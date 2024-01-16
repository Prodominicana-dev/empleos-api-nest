/*
  Warnings:

  - You are about to drop the column `answer` on the `KnowledgeAnswer` table. All the data in the column will be lost.
  - You are about to drop the column `answer` on the `LanguageAnswer` table. All the data in the column will be lost.
  - You are about to drop the column `answer` on the `ProfileParticularsAnswer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "KnowledgeAnswer" DROP COLUMN "answer",
ADD COLUMN     "answerKnow" TEXT;

-- AlterTable
ALTER TABLE "LanguageAnswer" DROP COLUMN "answer",
ADD COLUMN     "answerLan" TEXT;

-- AlterTable
ALTER TABLE "ProfileParticularsAnswer" DROP COLUMN "answer",
ADD COLUMN     "answerProf" TEXT;
