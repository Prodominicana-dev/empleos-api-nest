import { Module } from "@nestjs/common";
import { ReferenciasPersonalesController} from "./RefPer.controller";
import { ReferenciasPersonalesService } from "./RefPer.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[ReferenciasPersonalesController],
    providers:[ReferenciasPersonalesService],
    imports:[PrismaModule]
})
export class ReferenciasPersonalesModule {}