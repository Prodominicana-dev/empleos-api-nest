import { Module } from "@nestjs/common";
import { JobOpeningController} from "./JobOpening.controller";
import { JobOpeningService } from "./JobOpening.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[JobOpeningController],
    providers:[JobOpeningService],
    imports:[PrismaModule]
})
export class JobOpeningModule {}