import { Module } from "@nestjs/common";
import { KnowledgeAnswerController } from "./KnowledgeAnswer.controller";
import { KnowledgeAnswerService } from "./KnowledgeAnswer.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[KnowledgeAnswerController],
    providers:[KnowledgeAnswerService],
    imports:[PrismaModule]
})
export class KnowledgeAnswerModule {}