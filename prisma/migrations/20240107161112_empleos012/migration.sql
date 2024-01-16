/*
  Warnings:

  - You are about to drop the column `answerKnow` on the `KnowledgeAnswer` table. All the data in the column will be lost.
  - You are about to drop the column `answerLan` on the `LanguageAnswer` table. All the data in the column will be lost.
  - You are about to drop the column `answerProf` on the `ProfileParticularsAnswer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "KnowledgeAnswer" DROP COLUMN "answerKnow",
ADD COLUMN     "answerKnowledge" TEXT,
ADD COLUMN     "answerKnowledgeAssessment" TEXT,
ADD COLUMN     "status" TEXT;

-- AlterTable
ALTER TABLE "LanguageAnswer" DROP COLUMN "answerLan",
ADD COLUMN     "answerLanguage" TEXT,
ADD COLUMN     "answerLanguageAssessment" TEXT,
ADD COLUMN     "status" TEXT;

-- AlterTable
ALTER TABLE "ProfileAnswer" ADD COLUMN     "edadAssessment" TEXT,
ADD COLUMN     "educationAssessment" TEXT,
ADD COLUMN     "sexAssessment" TEXT,
ADD COLUMN     "status" TEXT,
ADD COLUMN     "workExperienceAssessment" TEXT;

-- AlterTable
ALTER TABLE "ProfileParticularsAnswer" DROP COLUMN "answerProf",
ADD COLUMN     "answerProfileParticulars" TEXT,
ADD COLUMN     "answerProfileParticularsAssessment" TEXT,
ADD COLUMN     "status" TEXT;
