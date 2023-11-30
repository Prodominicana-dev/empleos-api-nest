import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException} from "@nestjs/common";
import { IdiomaService } from "./Idioma.service";
import { idioma } from "@prisma/client";


@Controller('Idioma')
export class IdiomaController {

    constructor(private readonly IdiomaService:IdiomaService){}

    
    @Get()
    async getAllIdioma() {
        return await this.IdiomaService.getAllIdioma()
    }

    @Post()
    async createIdioma(@Body() data: idioma) {
        return await this.IdiomaService.createIdioma(data)
    }

    @Get(':id')
    async getIdiomaById(@Param('id') id:string){
        const IdiomaFound = await this.IdiomaService.getIdiomaById(Number(id))
        if(!IdiomaFound ) throw new NotFoundException('Idioma does not exist')
        return IdiomaFound 
    }

    @Delete(':id')
    async deleteIdioma(@Param('id') id:string){
       try {
           return await this.IdiomaService.deleteIdiomas(Number(id))
       } catch (error) {
           throw new NotFoundException('Idioma does not exist')
       }
    }

    @Put(':id')
    async updateIdioma(@Param('id') id: string, @Body() data: idioma){
       try {
           return await this.IdiomaService.updateIdiomas(Number(id), data)
       } catch (error) {
           throw new NotFoundException('Idioma does not exist')
       }
    }

    
}