import { Module } from "@nestjs/common";
import { DocumentController } from "./Document.controller";
import { DocumentService } from "./Document.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[DocumentController],
    providers:[DocumentService],
    imports:[PrismaModule]
})
export class DocumentModule {}