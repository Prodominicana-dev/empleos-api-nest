import { Module } from "@nestjs/common";
import { PeriodoController } from "./Periodo.controller";
import { PeriodoService } from "./Periodo.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[PeriodoController],
    providers:[PeriodoService],
    imports:[PrismaModule]
})
export class PeriodoModule {}