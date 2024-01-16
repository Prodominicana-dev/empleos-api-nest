import { Module } from "@nestjs/common";
import { PeriodController } from "./Period.controller";
import { PeriodService } from "./Period.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[PeriodController],
    providers:[PeriodService],
    imports:[PrismaModule]
})
export class PeriodModule {}