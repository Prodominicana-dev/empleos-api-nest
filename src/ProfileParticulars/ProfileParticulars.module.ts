import { Module } from "@nestjs/common";
import { ProfileParticularsController } from "./ProfileParticulars.controller";
import { ProfileParticularsService } from "./ProfileParticulars.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[ProfileParticularsController],
    providers:[ProfileParticularsService],
    imports:[PrismaModule]
})
export class ProfileParticularsModule {}