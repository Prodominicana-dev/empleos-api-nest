import { Module } from "@nestjs/common";
import { UserController} from "./User.controller";
import { UserService } from "./User.service";
import { PrismaModule } from "src/prisma/prisma.module";
import { EmailService } from "src/Email/Email.service";

@Module({
    controllers:[UserController],
    providers:[UserService,EmailService],
    imports:[PrismaModule]
})
export class UserModule {}