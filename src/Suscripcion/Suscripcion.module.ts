import { Module } from "@nestjs/common";
import { SuscripcionController} from "./Suscripcion.controller";
import { SuscripcionService } from "./Suscripcion.service";
import { EmailService } from "src/Correo/Correo.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[SuscripcionController],
    providers:[SuscripcionService,EmailService],
    imports:[PrismaModule]
})
export class SuscripcionModule {}