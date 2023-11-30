import { Module } from "@nestjs/common";
import { MostrarPDFController } from "./MostrarPdf.controller";
import { MostrarPDFService } from "./MostrarPdf.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[MostrarPDFController],
    providers:[MostrarPDFService],
    imports:[PrismaModule]
})
export class MostrarPDFModule {}