import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException} from "@nestjs/common";
import { PeriodoService } from "./Periodo.service";
import { periodo } from "@prisma/client";


@Controller('Periodo')
export class PeriodoController {

    constructor(private readonly PeriodoService:PeriodoService){}

    
    @Get()
    async getAllPeriodo() {
        return await this.PeriodoService.getAllPeriodo()
    }

    @Post()
    async createPeriodo(@Body() data: periodo) {
        return await this.PeriodoService.createPeriodo(data)
    }

    @Get(':id')
    async getPeriodoById(@Param('id') id:string){
        const periodoFound = await this.PeriodoService.getPeriodoById(Number(id))
        if(!periodoFound ) throw new NotFoundException('Periodo does not exist')
        return periodoFound 
    }

    @Delete(':id')
    async deletePeriodo(@Param('id') id:string){
       try {
           return await this.PeriodoService.deletePeriodos(Number(id))
       } catch (error) {
           throw new NotFoundException('Periodo does not exist')
       }
    }

    @Put(':id')
    async updatePeriodo(@Param('id') id: string, @Body() data: periodo){
       try {
           return await this.PeriodoService.updatePeriodos(Number(id), data)
       } catch (error) {
           throw new NotFoundException('Periodo does not exist')
       }
    }

    
}