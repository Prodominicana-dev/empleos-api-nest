import { Module } from "@nestjs/common";
import { ExperienciaLaboralController } from "./ExLa.controller";
import { ExperienciaLaboralService } from "./ExLa.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[ExperienciaLaboralController],
    providers:[ExperienciaLaboralService],
    imports:[PrismaModule]
})
export class ExperienciaLaboralModule {}