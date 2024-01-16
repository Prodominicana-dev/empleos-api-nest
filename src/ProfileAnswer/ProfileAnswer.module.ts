import { Module } from "@nestjs/common";
import { ProfileAnswerController } from "./ProfileAnswer.controller";
import { ProfileAnswerService } from "./ProfileAnswer.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[ProfileAnswerController],
    providers:[ProfileAnswerService],
    imports:[PrismaModule]
})
export class ProfileAnswerModule {}