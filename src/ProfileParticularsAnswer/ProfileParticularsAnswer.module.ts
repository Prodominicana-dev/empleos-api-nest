import { Module } from "@nestjs/common";
import { ProfileParticularsAnswerController } from "./ProfileParticularsAnswer.controller";
import { ProfileParticularsAnswerService } from "./ProfileParticularsAnswer.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[ProfileParticularsAnswerController],
    providers:[ProfileParticularsAnswerService],
    imports:[PrismaModule]
})
export class ProfileParticularsAnswerModule {} 