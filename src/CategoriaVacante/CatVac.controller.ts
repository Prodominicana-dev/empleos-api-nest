import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException} from "@nestjs/common";
import { CategoriaVacantesService } from "./CatVac.service";
import { categoriavacantes } from "@prisma/client";

@Controller('Categoria')
export class CategoriaVacantesController {

    constructor(private readonly CategoriaVacantesService:CategoriaVacantesService){}

    
    @Get()
    async getAllCatVac() {
        return await this.CategoriaVacantesService.getAllCatVac()
    }

    @Post()
    async createCatVac(@Body() data: categoriavacantes) {
        return  this.CategoriaVacantesService.createCatVac(data)
    }

    @Get(':id')
    async getCatVacById(@Param('id') id:string){
        const CatVacFound = await this.CategoriaVacantesService.getCatVacById(Number(id))
        if(!CatVacFound ) throw new NotFoundException('CatVac does not exist')
        return CatVacFound 
    }

    @Delete(':id')
    async deleteCatVac(@Param('id') id:string){
       try {
           return await this.CategoriaVacantesService.deleteCatVacs(Number(id))
       } catch (error) {
           throw new NotFoundException('CatVac does not exist')
       }
    }

    @Put(':id')
    async updateCatVac(@Param('id') id: string, @Body() data: categoriavacantes){
       try {
           return await this.CategoriaVacantesService.updateCatVacs(Number(id), data)
       } catch (error) {
           throw new NotFoundException('CatVac does not exist')
       }
    }
}