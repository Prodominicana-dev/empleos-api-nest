import { Module } from "@nestjs/common";
import { EmailController } from "./Email.controller";
import { EmailService } from "./Email.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[EmailController],
    providers:[EmailService],
    imports:[PrismaModule]
})
export class EmailModule {}