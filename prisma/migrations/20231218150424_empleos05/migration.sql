/*
  Warnings:

  - You are about to drop the `categoriavacantes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `documentos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `educacion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `experiencialaboralexterna` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `formacioncomple` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `idioma` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `imagenperf` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `informeperfil` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `periodo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `referenciaslaborales` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `referenciaspersonales` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `suscripcion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usuario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usuariovacante` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `vacantes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "documentos" DROP CONSTRAINT "fk__curriculu__idsus__4ab81af0";

-- DropForeignKey
ALTER TABLE "educacion" DROP CONSTRAINT "fk__educacion__idsus__4bac3f29";

-- DropForeignKey
ALTER TABLE "experiencialaboralexterna" DROP CONSTRAINT "fk__experienc__idsus__4ca06362";

-- DropForeignKey
ALTER TABLE "formacioncomple" DROP CONSTRAINT "fk__formacion__idsus__4d94879b";

-- DropForeignKey
ALTER TABLE "idioma" DROP CONSTRAINT "fk__idioma__idsuscri__4e88abd4";

-- DropForeignKey
ALTER TABLE "informeperfil" DROP CONSTRAINT "fk__informepe__idsus__4f7cd00d";

-- DropForeignKey
ALTER TABLE "referenciaslaborales" DROP CONSTRAINT "fk__referenci__idsus__5070f446";

-- DropForeignKey
ALTER TABLE "referenciaspersonales" DROP CONSTRAINT "fk__referenci__idsus__5165187f";

-- DropForeignKey
ALTER TABLE "usuariovacante" DROP CONSTRAINT "fk__usuariova__idsus__52593cb8";

-- DropForeignKey
ALTER TABLE "usuariovacante" DROP CONSTRAINT "fk__usuariova__idvac__534d60f1";

-- DropForeignKey
ALTER TABLE "vacantes" DROP CONSTRAINT "fk__vacantes__idcate__5441852a";

-- DropTable
DROP TABLE "categoriavacantes";

-- DropTable
DROP TABLE "documentos";

-- DropTable
DROP TABLE "educacion";

-- DropTable
DROP TABLE "experiencialaboralexterna";

-- DropTable
DROP TABLE "formacioncomple";

-- DropTable
DROP TABLE "idioma";

-- DropTable
DROP TABLE "imagenperf";

-- DropTable
DROP TABLE "informeperfil";

-- DropTable
DROP TABLE "periodo";

-- DropTable
DROP TABLE "referenciaslaborales";

-- DropTable
DROP TABLE "referenciaspersonales";

-- DropTable
DROP TABLE "suscripcion";

-- DropTable
DROP TABLE "usuario";

-- DropTable
DROP TABLE "usuariovacante";

-- DropTable
DROP TABLE "vacantes";

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "category" TEXT,
    "registrationDate" TIMESTAMP(3),

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Document" (
    "id" SERIAL NOT NULL,
    "idSubscription" INTEGER,
    "name" TEXT,
    "size" TEXT,
    "registrationDate" TIMESTAMP(3),

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Education" (
    "id" SERIAL NOT NULL,
    "idSubscription" INTEGER,
    "academicPreparation" TEXT,
    "institution" TEXT,
    "fieldStudy" TEXT,
    "degreeAwarded" TEXT,
    "studyStatus" TEXT,
    "issueDate" TEXT,
    "startStudy" TEXT,
    "endStudy" TEXT,
    "registrationDate" TIMESTAMP(3),

    CONSTRAINT "Education_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkExperience" (
    "id" SERIAL NOT NULL,
    "idSubscription" INTEGER,
    "startDate" TEXT,
    "endDate" TEXT,
    "companyName" TEXT,
    "position" TEXT,
    "salary" TEXT,
    "jobArea" TEXT,
    "industry" TEXT,
    "supervisor" TEXT,
    "responsibilitiesAchievements" TEXT,
    "phoneNumber" TEXT,
    "registrationDate" TIMESTAMP(3),

    CONSTRAINT "WorkExperience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Training" (
    "id" SERIAL NOT NULL,
    "idSubscription" INTEGER,
    "certificate" TEXT,
    "startDate" TEXT,
    "endDate" TEXT,
    "certificateStatus" TEXT,
    "registrationDate" TIMESTAMP(3),

    CONSTRAINT "Training_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Language" (
    "id" SERIAL NOT NULL,
    "idSubscription" INTEGER,
    "language" TEXT,
    "institutionName" TEXT,
    "conversationLevel" TEXT,
    "readingLevel" TEXT,
    "writingLevel" TEXT,
    "translationAbility" TEXT,
    "registrationDate" TIMESTAMP(3),

    CONSTRAINT "Language_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfilePicture" (
    "id" SERIAL NOT NULL,
    "idSubscription" INTEGER,
    "name" TEXT,
    "registrationDate" TIMESTAMP(3),

    CONSTRAINT "ProfilePicture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "idSubscription" INTEGER,
    "name" TEXT,
    "lastName" TEXT,
    "email" TEXT,
    "mobile" TEXT,
    "landline" TEXT,
    "countryBirth" TEXT,
    "nationality" TEXT,
    "sex" TEXT,
    "birthDate" TEXT,
    "documentType" TEXT,
    "documentNumber" TEXT,
    "civilStatus" TEXT,
    "province" TEXT,
    "relativeWork" TEXT,
    "driverLicense" TEXT,
    "ownsVehicle" TEXT,
    "relationship" TEXT,
    "relationshipName" TEXT,
    "relationshipLandline" TEXT,
    "salaryDesired" TEXT,
    "Question" TEXT,
    "relationshipQuestion" TEXT,
    "registrationDate" TIMESTAMP(3),

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Period" (
    "id" SERIAL NOT NULL,
    "idJobOpening" INTEGER,
    "status" TEXT,
    "registrationDate" TIMESTAMP(3),

    CONSTRAINT "Period_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfessionalReferences" (
    "id" SERIAL NOT NULL,
    "idSubscription" INTEGER,
    "fullName" TEXT,
    "landline" TEXT,
    "profession" TEXT,
    "relationship" TEXT,
    "registrationDate" TIMESTAMP(3),

    CONSTRAINT "ProfessionalReferences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonalReferences" (
    "id" SERIAL NOT NULL,
    "idSubscription" INTEGER,
    "fullName" TEXT,
    "landline" TEXT,
    "occupation" TEXT,
    "registrationDate" TIMESTAMP(3),

    CONSTRAINT "PersonalReferences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subscription" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "password" TEXT,
    "registrationDate" TIMESTAMP(3),

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT,
    "email" TEXT,
    "password" TEXT,
    "registrationDate" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PositionAppliedFor" (
    "id" SERIAL NOT NULL,
    "idSubscription" INTEGER,
    "idJobOpening" INTEGER,
    "status" TEXT,
    "registrationDate" TIMESTAMP(3),

    CONSTRAINT "PositionAppliedFor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobOpening" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "responsibilities" TEXT,
    "profile" TEXT,
    "registrationDate" TIMESTAMP(3),
    "status" TEXT,
    "idCategory" INTEGER,

    CONSTRAINT "JobOpening_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_idSubscription_fkey" FOREIGN KEY ("idSubscription") REFERENCES "Subscription"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Education" ADD CONSTRAINT "Education_idSubscription_fkey" FOREIGN KEY ("idSubscription") REFERENCES "Subscription"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "WorkExperience" ADD CONSTRAINT "WorkExperience_idSubscription_fkey" FOREIGN KEY ("idSubscription") REFERENCES "Subscription"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Training" ADD CONSTRAINT "Training_idSubscription_fkey" FOREIGN KEY ("idSubscription") REFERENCES "Subscription"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Language" ADD CONSTRAINT "Language_idSubscription_fkey" FOREIGN KEY ("idSubscription") REFERENCES "Subscription"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ProfilePicture" ADD CONSTRAINT "ProfilePicture_idSubscription_fkey" FOREIGN KEY ("idSubscription") REFERENCES "Subscription"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_idSubscription_fkey" FOREIGN KEY ("idSubscription") REFERENCES "Subscription"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Period" ADD CONSTRAINT "Period_idJobOpening_fkey" FOREIGN KEY ("idJobOpening") REFERENCES "JobOpening"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ProfessionalReferences" ADD CONSTRAINT "ProfessionalReferences_idSubscription_fkey" FOREIGN KEY ("idSubscription") REFERENCES "Subscription"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "PersonalReferences" ADD CONSTRAINT "PersonalReferences_idSubscription_fkey" FOREIGN KEY ("idSubscription") REFERENCES "Subscription"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "PositionAppliedFor" ADD CONSTRAINT "PositionAppliedFor_idSubscription_fkey" FOREIGN KEY ("idSubscription") REFERENCES "Subscription"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "PositionAppliedFor" ADD CONSTRAINT "PositionAppliedFor_idJobOpening_fkey" FOREIGN KEY ("idJobOpening") REFERENCES "JobOpening"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "JobOpening" ADD CONSTRAINT "JobOpening_idCategory_fkey" FOREIGN KEY ("idCategory") REFERENCES "Category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
