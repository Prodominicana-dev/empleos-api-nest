import { Module } from "@nestjs/common";
import { CategoryController } from "./Category.controller";
import { CategoryService } from "./Category.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[CategoryController],
    providers:[CategoryService],
    imports:[PrismaModule]
})
export class CategoryModule {}
