import { Module } from "@nestjs/common";
import { FormacionComplementariaController } from "./ForCom.controller";
import { FormacionComplementariaService } from "./ForCom.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[FormacionComplementariaController],
    providers:[FormacionComplementariaService],
    imports:[PrismaModule]
})
export class FormacionComplementariaModule {}