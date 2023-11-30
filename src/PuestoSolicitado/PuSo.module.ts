import { Module } from "@nestjs/common";
import { PuestoSolicitadoController } from "./PuSo.controller";
import { PuestoSolicitadoService } from "./PuSo.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[PuestoSolicitadoController],
    providers:[PuestoSolicitadoService],
    imports:[PrismaModule]
})
export class PuestoSolicitadoModule {}