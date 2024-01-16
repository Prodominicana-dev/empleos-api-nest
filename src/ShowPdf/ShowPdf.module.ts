import { Module } from "@nestjs/common";
import { ShowPDFController } from "./ShowPdf.controller";
import { ShowPDFService } from "./ShowPdf.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[ShowPDFController],
    providers:[ShowPDFService],
    imports:[PrismaModule]
})
export class ShowPDFModule {}