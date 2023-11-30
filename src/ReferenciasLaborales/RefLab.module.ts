import { Module } from "@nestjs/common";
import { ReferenciasLaboralesController } from "./RefLab.controller";
import { ReferenciasLaboralesService } from "./RefLab.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[ReferenciasLaboralesController],
    providers:[ReferenciasLaboralesService],
    imports:[PrismaModule]
})
export class ReferenciasLaboralesModule {}