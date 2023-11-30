-- CreateTable
CREATE TABLE "categoriavacantes" (
    "id" SERIAL NOT NULL,
    "categoria" VARCHAR(50),
    "fecharegistro" TIMESTAMP(3),

    CONSTRAINT "pk__categori__3214ec0775cfcb4b" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "curriculum" (
    "id" SERIAL NOT NULL,
    "idsuscripcion" INTEGER,
    "nombre" VARCHAR(300),
    "size" VARCHAR(50),
    "fechacreacion" TIMESTAMP(3),
    "fecharegistro" TIMESTAMP(3),

    CONSTRAINT "pk__curricul__3214ec079f7cc7ef" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "educacion" (
    "id" SERIAL NOT NULL,
    "idsuscripcion" INTEGER,
    "preparacionacademica" TEXT,
    "institución" VARCHAR(120),
    "areaestudio" VARCHAR(120),
    "titulootorgado" VARCHAR(150),
    "estadoestudio" VARCHAR(50),
    "fechaexpedicion" VARCHAR(50),
    "inicioestudio" VARCHAR(50),
    "terminoestudio" VARCHAR(50),
    "fecharegistro" TIMESTAMP(3),

    CONSTRAINT "pk__educacio__3214ec070f33ac75" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "experiencialaboralexterna" (
    "id" SERIAL NOT NULL,
    "idsuscripcion" INTEGER,
    "fechainicial" VARCHAR(50),
    "fechafinal" VARCHAR(50),
    "nombrecompania" VARCHAR(50),
    "puesto" VARCHAR(50),
    "salario" VARCHAR(50),
    "areapuesto" VARCHAR(120),
    "industria" VARCHAR(50),
    "supervisor" VARCHAR(120),
    "funcioneslogros" TEXT,
    "telefono" VARCHAR(50),
    "fecharegistro" TIMESTAMP(3),

    CONSTRAINT "pk__experien__3214ec071f0170e4" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "formacioncomple" (
    "id" SERIAL NOT NULL,
    "idsuscripcion" INTEGER,
    "certificado" VARCHAR(50),
    "fechainicio" VARCHAR(120),
    "fechafinal" VARCHAR(120),
    "estadocerti" VARCHAR(50),
    "fecharegistro" TIMESTAMP(3),

    CONSTRAINT "pk__formacio__3214ec074e1dd9cb" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "idioma" (
    "id" SERIAL NOT NULL,
    "idsuscripcion" INTEGER,
    "idioma" VARCHAR(50),
    "nombreinstitucion" VARCHAR(50),
    "nivelconversacion" VARCHAR(50),
    "nivellectura" VARCHAR(50),
    "nivelescritura" VARCHAR(50),
    "capacidadtraducir" VARCHAR(50),
    "fecharegistro" TIMESTAMP(3),

    CONSTRAINT "pk__idioma__3214ec072d6890c3" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "imagenperf" (
    "id" SERIAL NOT NULL,
    "idsuscripcion" INTEGER,
    "nombre" TEXT,
    "fecharegistro" TIMESTAMP(3),

    CONSTRAINT "pk__imagenpe__3214ec073e51ffa7" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "informeperfil" (
    "id" SERIAL NOT NULL,
    "idsuscripcion" INTEGER,
    "nombre" VARCHAR(120),
    "apellidos" VARCHAR(120),
    "email" VARCHAR(120),
    "movil" VARCHAR(50),
    "telefonofijo" VARCHAR(50),
    "paisnacimiento" VARCHAR(50),
    "nacionalidad" VARCHAR(50),
    "sexo" VARCHAR(10),
    "fechanacimiento" VARCHAR(50),
    "tipodocumento" VARCHAR(50),
    "numerodocumento" VARCHAR(50),
    "estadocivil" VARCHAR(20),
    "provincia" VARCHAR(20),
    "parientetrabajo" VARCHAR(50),
    "tienelicencondicir" VARCHAR(10),
    "possevehiculo" VARCHAR(10),
    "parentescoemergente" VARCHAR(120),
    "nombreparentesco" VARCHAR(50),
    "telefonoparentesco" VARCHAR(50),
    "suleldoaspira" VARCHAR(50),
    "preguntaempleado" VARCHAR(50),
    "preguntapariente" VARCHAR(50),
    "fecharegistro" TIMESTAMP(3),

    CONSTRAINT "pk__informep__3214ec07613f253a" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "periodo" (
    "id" SERIAL NOT NULL,
    "idvacante" INTEGER,
    "estado" VARCHAR(20),
    "fecharegistro" TIMESTAMP(3),

    CONSTRAINT "pk__periodo__3214ec0711fd1d05" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "referenciaslaborales" (
    "id" SERIAL NOT NULL,
    "idsuscripcion" INTEGER,
    "nombrecompleto" VARCHAR(150),
    "telefono" VARCHAR(150),
    "profesion" VARCHAR(200),
    "relacion" VARCHAR(50),
    "fecharegistro" TIMESTAMP(3),

    CONSTRAINT "pk__referenc__3214ec07a60e635d" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "referenciaspersonales" (
    "id" SERIAL NOT NULL,
    "idsuscripcion" INTEGER,
    "nombrecompleto" VARCHAR(150),
    "telefono" VARCHAR(50),
    "ocupacion" VARCHAR(50),
    "fecharegistro" TIMESTAMP(3),

    CONSTRAINT "pk__referenc__3214ec076355bd5e" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "suscripcion" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(120) NOT NULL,
    "movil" VARCHAR(50),
    "email" VARCHAR(120),
    "password" TEXT,
    "fecharegistro" TIMESTAMP(3),
    "trial398" CHAR(1),

    CONSTRAINT "pk__suscripc__3214ec076487a8c9" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "nombrecompleto" VARCHAR(50),
    "correo" VARCHAR(120),
    "password" TEXT,
    "fecharegistro" TIMESTAMP(3),

    CONSTRAINT "pk__usuario__3214ec07361fb02d" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuariovacante" (
    "id" SERIAL NOT NULL,
    "idsuscripcion" INTEGER,
    "idvacante" INTEGER,
    "fecharegistro" TIMESTAMP(3),
    "estado" VARCHAR(20),

    CONSTRAINT "pk__usuariov__3214ec07a0608920" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vacantes" (
    "id" SERIAL NOT NULL,
    "nombrevacante" VARCHAR(200) NOT NULL,
    "responsabilidades" TEXT NOT NULL,
    "perfilpuesto" TEXT NOT NULL,
    "fecharegistro" TIMESTAMP(3),
    "condicion" VARCHAR(20),
    "idcategoria" INTEGER,
    "trial401" CHAR(1),

    CONSTRAINT "pk__vacantes__3214ec07dda686b3" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "curriculum" ADD CONSTRAINT "fk__curriculu__idsus__4ab81af0" FOREIGN KEY ("idsuscripcion") REFERENCES "suscripcion"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "educacion" ADD CONSTRAINT "fk__educacion__idsus__4bac3f29" FOREIGN KEY ("idsuscripcion") REFERENCES "suscripcion"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "experiencialaboralexterna" ADD CONSTRAINT "fk__experienc__idsus__4ca06362" FOREIGN KEY ("idsuscripcion") REFERENCES "suscripcion"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "formacioncomple" ADD CONSTRAINT "fk__formacion__idsus__4d94879b" FOREIGN KEY ("idsuscripcion") REFERENCES "suscripcion"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "idioma" ADD CONSTRAINT "fk__idioma__idsuscri__4e88abd4" FOREIGN KEY ("idsuscripcion") REFERENCES "suscripcion"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "informeperfil" ADD CONSTRAINT "fk__informepe__idsus__4f7cd00d" FOREIGN KEY ("idsuscripcion") REFERENCES "suscripcion"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "referenciaslaborales" ADD CONSTRAINT "fk__referenci__idsus__5070f446" FOREIGN KEY ("idsuscripcion") REFERENCES "suscripcion"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "referenciaspersonales" ADD CONSTRAINT "fk__referenci__idsus__5165187f" FOREIGN KEY ("idsuscripcion") REFERENCES "suscripcion"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "usuariovacante" ADD CONSTRAINT "fk__usuariova__idsus__52593cb8" FOREIGN KEY ("idsuscripcion") REFERENCES "suscripcion"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "usuariovacante" ADD CONSTRAINT "fk__usuariova__idvac__534d60f1" FOREIGN KEY ("idvacante") REFERENCES "vacantes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "vacantes" ADD CONSTRAINT "fk__vacantes__idcate__5441852a" FOREIGN KEY ("idcategoria") REFERENCES "categoriavacantes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
