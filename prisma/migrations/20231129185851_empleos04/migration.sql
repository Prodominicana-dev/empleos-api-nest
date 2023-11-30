/*
  Warnings:

  - You are about to drop the `Documentos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Documentos" DROP CONSTRAINT "fk__curriculu__idsus__4ab81af0";

-- DropTable
DROP TABLE "Documentos";

-- CreateTable
CREATE TABLE "documentos" (
    "id" SERIAL NOT NULL,
    "idsuscripcion" INTEGER,
    "nombre" VARCHAR(300),
    "size" VARCHAR(50),
    "fechacreacion" TIMESTAMP(3),
    "fecharegistro" TIMESTAMP(3),

    CONSTRAINT "pk__curricul__3214ec079f7cc7ef" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "documentos" ADD CONSTRAINT "fk__curriculu__idsus__4ab81af0" FOREIGN KEY ("idsuscripcion") REFERENCES "suscripcion"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
