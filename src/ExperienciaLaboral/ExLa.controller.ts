import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException} from "@nestjs/common";
import { ExperienciaLaboralService } from "./ExLa.service";
import { experiencialaboralexterna } from "@prisma/client";


@Controller('ExperienciaLaboralExterna')
export class ExperienciaLaboralController {

    constructor(private readonly ExperienciaLaboralService:ExperienciaLaboralService){}

    
    @Get()
    async getAllExLa() {
        return await this.ExperienciaLaboralService.getAllExLa()
    }

    @Post()
    async createExLa(@Body() data: experiencialaboralexterna) {
        return await this.ExperienciaLaboralService.createExLa(data)
    }

    @Get(':id')
    async getExLaById(@Param('id') id:string){
        const ExLaFound = await this.ExperienciaLaboralService.getExLaById(Number(id))
        if(!ExLaFound ) throw new NotFoundException('ExperienciaLaboral does not exist')
        return ExLaFound 
    }

    @Delete(':id')
    async deleteExLa(@Param('id') id:string){
       try {
           return await this.ExperienciaLaboralService.deleteExLas(Number(id))
       } catch (error) {
           throw new NotFoundException('ExperienciaLaboral does not exist')
       }
    }

    @Put(':id')
    async updateExLa(@Param('id') id: string, @Body() data: experiencialaboralexterna){
       try {
           return await this.ExperienciaLaboralService.updateExLas(Number(id), data)
       } catch (error) {
           throw new NotFoundException('ExperienciaLaboral does not exist')
       }
    }

    
}