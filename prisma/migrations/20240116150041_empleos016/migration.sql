/*
  Warnings:

  - You are about to drop the `AnswerAssessment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AnswerSubscription` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AskAssessment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SubTitleAssessment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TitleAssessment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AnswerAssessment" DROP CONSTRAINT "AnswerAssessment_idAsk_fkey";

-- DropForeignKey
ALTER TABLE "AnswerSubscription" DROP CONSTRAINT "AnswerSubscription_idJobOpening_fkey";

-- DropForeignKey
ALTER TABLE "AnswerSubscription" DROP CONSTRAINT "AnswerSubscription_idSubscription_fkey";

-- DropForeignKey
ALTER TABLE "AskAssessment" DROP CONSTRAINT "AskAssessment_idSubTitle_fkey";

-- DropForeignKey
ALTER TABLE "SubTitleAssessment" DROP CONSTRAINT "SubTitleAssessment_idTitle_fkey";

-- DropForeignKey
ALTER TABLE "TitleAssessment" DROP CONSTRAINT "TitleAssessment_idJobOpening_fkey";

-- DropTable
DROP TABLE "AnswerAssessment";

-- DropTable
DROP TABLE "AnswerSubscription";

-- DropTable
DROP TABLE "AskAssessment";

-- DropTable
DROP TABLE "SubTitleAssessment";

-- DropTable
DROP TABLE "TitleAssessment";
