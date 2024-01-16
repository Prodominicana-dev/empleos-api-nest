import { Module } from "@nestjs/common";
import { TrainingController } from "./Training.controller";
import { TrainingService } from "./Training.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[TrainingController],
    providers:[TrainingService],
    imports:[PrismaModule]
})
export class TrainingModule {}