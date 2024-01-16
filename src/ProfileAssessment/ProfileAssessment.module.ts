import { Module } from "@nestjs/common";
import { ProfileAssessmentController } from "./ProfileAssessment.controller";
import { ProfileAssessmentService } from "./ProfileAssessment.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[ProfileAssessmentController],
    providers:[ProfileAssessmentService],
    imports:[PrismaModule]
})
export class ProfileAssessmentModule {}