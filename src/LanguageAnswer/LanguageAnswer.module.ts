import { Module } from "@nestjs/common";
import { LanguageAnswerController } from "./LanguageAnswer.controller";
import { LanguageAnswerService } from "./LanguageAnswer.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[LanguageAnswerController],
    providers:[LanguageAnswerService],
    imports:[PrismaModule]
})
export class LanguageAnswerModule {}