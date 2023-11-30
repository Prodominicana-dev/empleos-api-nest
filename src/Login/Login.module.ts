import { Module } from "@nestjs/common";
import { LoginController } from "./Login.controller";
import { LoginService } from "./Login.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[LoginController],
    providers:[LoginService],
    imports:[PrismaModule]
})
export class LoginModule {}