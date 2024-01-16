import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException} from "@nestjs/common";
import { CategoryService } from "./Category.service";
import { Category } from "@prisma/client";

@Controller('Categoria')
export class CategoryController {

    constructor(private readonly CategoryService:CategoryService){}

    
    @Get()
    async getAllCategory() {
        return await this.CategoryService.getAllCategory()
    }

    @Post()
    async createCategory(@Body() data: Category) {
        return  this.CategoryService.createCategory(data)
    }

    @Get(':id')
    async getCategoryById(@Param('id') id:string){
        const CategoryFound = await this.CategoryService.getCategoryById(Number(id))
        if(!CategoryFound ) throw new NotFoundException('Category does not exist')
        return CategoryFound 
    }

    @Delete(':id')
    async deleteCategory(@Param('id') id:string){
       try {
           return await this.CategoryService.deleteCategory(Number(id))
       } catch (error) {
           throw new NotFoundException('Category does not exist')
       }
    }

    @Put(':id')
    async updateCategory(@Param('id') id: string, @Body() data: Category){
       try {
           return await this.CategoryService.updateCategory(Number(id), data)
       } catch (error) {
           throw new NotFoundException('Category does not exist')
       }
    }
}