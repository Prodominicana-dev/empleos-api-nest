import { Module } from "@nestjs/common";
import { LanguageController } from "./Language.controller";
import { LanguageService } from "./Language.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[LanguageController],
    providers:[LanguageService],
    imports:[PrismaModule]
})
export class LanguageModule {}