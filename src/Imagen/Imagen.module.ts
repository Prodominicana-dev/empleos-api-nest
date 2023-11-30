import { Module } from "@nestjs/common";
import { ImagenController } from "./Imagen.controller";
import { ImagenService } from "./Imagen.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[ImagenController],
    providers:[ImagenService],
    imports:[PrismaModule]
})
export class ImagenModule {}