import { Module } from "@nestjs/common";
import { InformePerfilController } from "./InfPer.controller";
import { InformePerfilService } from "./InfPer.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[InformePerfilController],
    providers:[InformePerfilService],
    imports:[PrismaModule]
})
export class InformePerfilModule {}