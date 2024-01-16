import { Module } from "@nestjs/common";
import { KnowledgeAssessmentController } from "./KnowledgeAssessment.controller";
import { KnowledgeAssessmentService } from "./KnowledgeAssessment.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[KnowledgeAssessmentController],
    providers:[KnowledgeAssessmentService],
    imports:[PrismaModule]
})
export class KnowledgeAssessmentModule {}