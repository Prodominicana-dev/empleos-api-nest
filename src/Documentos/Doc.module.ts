import { Module } from "@nestjs/common";
import { DocumentoController } from "./Doc.controller";
import { DocumentoService } from "./Doc.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[DocumentoController],
    providers:[DocumentoService],
    imports:[PrismaModule]
})
export class DocumentoModule {}