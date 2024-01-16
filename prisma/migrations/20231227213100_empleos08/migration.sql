-- CreateTable
CREATE TABLE "ProfileAssessment" (
    "id" SERIAL NOT NULL,
    "idJobOpening" INTEGER,
    "sex" TEXT,
    "birthDate" TEXT,
    "workExperience" TEXT,
    "education" TEXT,
    "registrationDate" TIMESTAMP(3),

    CONSTRAINT "ProfileAssessment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LanguageAssessment" (
    "id" SERIAL NOT NULL,
    "idJobOpening" INTEGER,
    "language" TEXT,
    "answer" TEXT,
    "registrationDate" TIMESTAMP(3),

    CONSTRAINT "LanguageAssessment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KnowledgeAssessment" (
    "id" SERIAL NOT NULL,
    "idJobOpening" INTEGER,
    "knowledge" TEXT,
    "answer" TEXT,
    "registrationDate" TIMESTAMP(3),

    CONSTRAINT "KnowledgeAssessment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfileParticulars" (
    "id" SERIAL NOT NULL,
    "idJobOpening" INTEGER,
    "ask" TEXT,
    "answer" TEXT,
    "registrationDate" TIMESTAMP(3),

    CONSTRAINT "ProfileParticulars_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfileAnswer" (
    "id" SERIAL NOT NULL,
    "idJobOpening" INTEGER,
    "idSubscription" INTEGER,
    "sex" TEXT,
    "birthDate" TEXT,
    "workExperience" TEXT,
    "education" TEXT,
    "registrationDate" TIMESTAMP(3),

    CONSTRAINT "ProfileAnswer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LanguageAnswer" (
    "id" SERIAL NOT NULL,
    "idJobOpening" INTEGER,
    "idSubscription" INTEGER,
    "language" TEXT,
    "answer" TEXT,
    "registrationDate" TIMESTAMP(3),

    CONSTRAINT "LanguageAnswer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KnowledgeAnswer" (
    "id" SERIAL NOT NULL,
    "idJobOpening" INTEGER,
    "idSubscription" INTEGER,
    "knowledge" TEXT,
    "answer" TEXT,
    "registrationDate" TIMESTAMP(3),

    CONSTRAINT "KnowledgeAnswer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfileParticularsAnswer" (
    "id" SERIAL NOT NULL,
    "idJobOpening" INTEGER,
    "idSubscription" INTEGER,
    "ask" TEXT,
    "answer" TEXT,
    "registrationDate" TIMESTAMP(3),

    CONSTRAINT "ProfileParticularsAnswer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProfileAssessment" ADD CONSTRAINT "ProfileAssessment_idJobOpening_fkey" FOREIGN KEY ("idJobOpening") REFERENCES "JobOpening"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "LanguageAssessment" ADD CONSTRAINT "LanguageAssessment_idJobOpening_fkey" FOREIGN KEY ("idJobOpening") REFERENCES "JobOpening"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "KnowledgeAssessment" ADD CONSTRAINT "KnowledgeAssessment_idJobOpening_fkey" FOREIGN KEY ("idJobOpening") REFERENCES "JobOpening"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ProfileParticulars" ADD CONSTRAINT "ProfileParticulars_idJobOpening_fkey" FOREIGN KEY ("idJobOpening") REFERENCES "JobOpening"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ProfileAnswer" ADD CONSTRAINT "ProfileAnswer_idJobOpening_fkey" FOREIGN KEY ("idJobOpening") REFERENCES "JobOpening"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ProfileAnswer" ADD CONSTRAINT "ProfileAnswer_idSubscription_fkey" FOREIGN KEY ("idSubscription") REFERENCES "Subscription"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "LanguageAnswer" ADD CONSTRAINT "LanguageAnswer_idJobOpening_fkey" FOREIGN KEY ("idJobOpening") REFERENCES "JobOpening"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "LanguageAnswer" ADD CONSTRAINT "LanguageAnswer_idSubscription_fkey" FOREIGN KEY ("idSubscription") REFERENCES "Subscription"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "KnowledgeAnswer" ADD CONSTRAINT "KnowledgeAnswer_idJobOpening_fkey" FOREIGN KEY ("idJobOpening") REFERENCES "JobOpening"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "KnowledgeAnswer" ADD CONSTRAINT "KnowledgeAnswer_idSubscription_fkey" FOREIGN KEY ("idSubscription") REFERENCES "Subscription"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ProfileParticularsAnswer" ADD CONSTRAINT "ProfileParticularsAnswer_idJobOpening_fkey" FOREIGN KEY ("idJobOpening") REFERENCES "JobOpening"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ProfileParticularsAnswer" ADD CONSTRAINT "ProfileParticularsAnswer_idSubscription_fkey" FOREIGN KEY ("idSubscription") REFERENCES "Subscription"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
