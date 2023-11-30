import { Module } from "@nestjs/common";
import { EducacionController } from "./Educ.controller";
import { EducacionService } from "./Educ.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[EducacionController],
    providers:[EducacionService],
    imports:[PrismaModule]
})
export class EducacionModule {}