import { Module } from "@nestjs/common";
import { UsuarioController} from "./Usuario.controller";
import { UsuarioService } from "./Usuario.service";
import { PrismaModule } from "src/prisma/prisma.module";
import { EmailService } from "src/Correo/Correo.service";

@Module({
    controllers:[UsuarioController],
    providers:[UsuarioService,EmailService],
    imports:[PrismaModule]
})
export class UsuarioModule {}