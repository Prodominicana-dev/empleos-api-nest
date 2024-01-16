import { Module } from "@nestjs/common";
import { WorkExperienceController } from "./WorkExperience.controller";
import { WorkExperienceService } from "./WorkExperience.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[WorkExperienceController],
    providers:[WorkExperienceService],
    imports:[PrismaModule]
})
export class WorkExperienceModule {}