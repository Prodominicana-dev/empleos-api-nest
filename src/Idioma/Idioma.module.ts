import { Module } from "@nestjs/common";
import { IdiomaController } from "./Idioma.controller";
import { IdiomaService } from "./Idioma.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[IdiomaController],
    providers:[IdiomaService],
    imports:[PrismaModule]
})
export class IdiomaModule {}