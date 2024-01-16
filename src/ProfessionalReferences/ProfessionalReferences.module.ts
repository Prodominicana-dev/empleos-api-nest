import { Module } from "@nestjs/common";
import { ProfessionalReferencesController } from "./ProfessionalReferences.controller";
import { ProfessionalReferencesService } from "./ProfessionalReferences.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[ProfessionalReferencesController],
    providers:[ProfessionalReferencesService],
    imports:[PrismaModule]
})
export class ProfessionalReferencesModule {}