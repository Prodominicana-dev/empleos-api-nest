import { Module } from "@nestjs/common";
import { LanguageAssessmentController } from "./LanguageAssessment.controller";
import { LanguageAssessmentService } from "./LanguageAssessment.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[LanguageAssessmentController],
    providers:[LanguageAssessmentService],
    imports:[PrismaModule]
})
export class LanguageAssessmentModule {}