-- CreateTable
CREATE TABLE "TitleAssessment" (
    "id" SERIAL NOT NULL,
    "idJobOpening" INTEGER,
    "title" TEXT,
    "registrationDate" TIMESTAMP(3),

    CONSTRAINT "TitleAssessment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubTitleAssessment" (
    "id" SERIAL NOT NULL,
    "idTitle" INTEGER,
    "subTitle" TEXT,
    "registrationDate" TIMESTAMP(3),

    CONSTRAINT "SubTitleAssessment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AskAssessment" (
    "id" SERIAL NOT NULL,
    "idSubTitle" INTEGER,
    "ask" TEXT,
    "registrationDate" TIMESTAMP(3),

    CONSTRAINT "AskAssessment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnswerAssessment" (
    "id" SERIAL NOT NULL,
    "idAsk" INTEGER,
    "answer" TEXT,
    "registrationDate" TIMESTAMP(3),

    CONSTRAINT "AnswerAssessment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnswerSubscription" (
    "id" SERIAL NOT NULL,
    "idJobOpening" INTEGER,
    "idSubscription" INTEGER,
    "subTitle" TEXT,
    "ask" TEXT,
    "answer" TEXT,
    "registrationDate" TIMESTAMP(3),

    CONSTRAINT "AnswerSubscription_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TitleAssessment" ADD CONSTRAINT "TitleAssessment_idJobOpening_fkey" FOREIGN KEY ("idJobOpening") REFERENCES "JobOpening"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "SubTitleAssessment" ADD CONSTRAINT "SubTitleAssessment_idTitle_fkey" FOREIGN KEY ("idTitle") REFERENCES "TitleAssessment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "AskAssessment" ADD CONSTRAINT "AskAssessment_idSubTitle_fkey" FOREIGN KEY ("idSubTitle") REFERENCES "SubTitleAssessment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "AnswerAssessment" ADD CONSTRAINT "AnswerAssessment_idAsk_fkey" FOREIGN KEY ("idAsk") REFERENCES "AskAssessment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "AnswerSubscription" ADD CONSTRAINT "AnswerSubscription_idJobOpening_fkey" FOREIGN KEY ("idJobOpening") REFERENCES "JobOpening"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "AnswerSubscription" ADD CONSTRAINT "AnswerSubscription_idSubscription_fkey" FOREIGN KEY ("idSubscription") REFERENCES "Subscription"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
