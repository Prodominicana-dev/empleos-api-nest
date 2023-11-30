import { Module } from "@nestjs/common";
import { CorreoController } from "./Correo.controller";
import { EmailService } from "./Correo.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[CorreoController],
    providers:[EmailService],
    imports:[PrismaModule]
})
export class CorreoModule {}