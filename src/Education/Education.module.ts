import { Module } from "@nestjs/common";
import { EducationController } from "./Education.controller";
import { EducationService } from "./Education.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[EducationController],
    providers:[EducationService],
    imports:[PrismaModule]
})
export class EducationModule {}