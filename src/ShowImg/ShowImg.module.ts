import { Module } from "@nestjs/common";
import { ShowImgController } from "./ShowImg.controller";
import { ShowImgService } from "./ShowImg.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[ShowImgController],
    providers:[ShowImgService],
    imports:[PrismaModule]
})
export class ShowImgModule {}