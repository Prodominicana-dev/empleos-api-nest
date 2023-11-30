import { Module } from "@nestjs/common";
import { CategoriaVacantesController } from "./CatVac.controller";
import { CategoriaVacantesService } from "./CatVac.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[CategoriaVacantesController],
    providers:[CategoriaVacantesService],
    imports:[PrismaModule]
})
export class CategoriaVacantesModule {}
