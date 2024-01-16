import { Module } from "@nestjs/common";
import { ProfileController } from "./Profile.controller";
import { ProfileService } from "./Profile.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[ProfileController],
    providers:[ProfileService],
    imports:[PrismaModule]
})
export class ProfileModule {}