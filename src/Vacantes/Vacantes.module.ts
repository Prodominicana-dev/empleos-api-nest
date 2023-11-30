import { Module } from "@nestjs/common";
import { VacantesController} from "./Vacantes.controller";
import { VacantesService } from "./Vacantes.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[VacantesController],
    providers:[VacantesService],
    imports:[PrismaModule]
})
export class VacantesModule {}