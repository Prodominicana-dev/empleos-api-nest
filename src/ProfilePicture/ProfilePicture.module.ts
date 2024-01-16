import { Module } from "@nestjs/common";
import { ProfilePictureController } from "./ProfilePicture.controller";
import { ProfilePictureService } from "./ProfilePicture.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[ProfilePictureController],
    providers:[ProfilePictureService],
    imports:[PrismaModule]
})
export class ProfilePictureModule {}