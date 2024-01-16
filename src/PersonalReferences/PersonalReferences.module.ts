import { Module } from "@nestjs/common";
import { PersonalReferencesController} from "./PersonalReferences.controller";
import { PersonalReferencesService } from "./PersonalReferences.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[PersonalReferencesController],
    providers:[PersonalReferencesService],
    imports:[PrismaModule]
})
export class PersonalReferencesModule {}