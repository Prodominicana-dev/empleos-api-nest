import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException} from "@nestjs/common";
import { SuscripcionService } from "./Suscripcion.service";
import { suscripcion } from "@prisma/client";


@Controller('Suscripcion')
export class SuscripcionController {

    constructor(private readonly SuscripcionService:SuscripcionService){}

    
    @Get()
    async getAllSuscripcion() {
        return await this.SuscripcionService.getAllSuscripcion()
    }

    @Post()
    async createSuscripcion(@Body() data: suscripcion) {
        return await this.SuscripcionService.createSuscripcion(data)
    }

    @Get(':id')
    async getSuscripcionById(@Param('id') id:string){
        const SuscripcionFound = await this.SuscripcionService.getSuscripcionById(Number(id))
        if(!SuscripcionFound ) throw new NotFoundException('Suscripcion does not exist')
        return SuscripcionFound 
    }

    @Delete(':id')
    async deleteSuscripcion(@Param('id') id:string){
       try {
           return await this.SuscripcionService.deleteSuscripciones(Number(id))
       } catch (error) {
           throw new NotFoundException('Suscripcion does not exist')
       }
    }

    @Put(':id')
    async updateSuscripcion(@Param('id') id: string, @Body() data: suscripcion){
       try {
           return await this.SuscripcionService.updateSuscripciones(Number(id), data)
       } catch (error) {
           throw new NotFoundException('Suscripcion does not exist')
       }
    }

    
}