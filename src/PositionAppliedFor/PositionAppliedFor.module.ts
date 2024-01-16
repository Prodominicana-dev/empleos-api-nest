import { Module } from "@nestjs/common";
import { PositionAppliedForController } from "./PositionAppliedFor.controller";
import { PositionAppliedForService } from "./PositionAppliedFor.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[PositionAppliedForController],
    providers:[PositionAppliedForService],
    imports:[PrismaModule]
})
export class PositionAppliedForModule {}