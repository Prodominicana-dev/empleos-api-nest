import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException} from "@nestjs/common";
import { ReferenciasLaboralesService } from "./RefLab.service";
import { referenciaslaborales } from "@prisma/client";


@Controller('ReferenciasLaborales')
export class ReferenciasLaboralesController {

    constructor(private readonly ReferenciasLaboralesService:ReferenciasLaboralesService){}

    
    @Get()
    async getAllRefLab() {
        return await this.ReferenciasLaboralesService.getAllRefLab()
    }

    @Post()
    async createRefLab(@Body() data: referenciaslaborales) {
        return await this.ReferenciasLaboralesService.createRefLab(data)
    }

    @Get(':id')
    async getRefLabById(@Param('id') id:string){
        const RefLabFound = await this.ReferenciasLaboralesService.getRefLabById(Number(id))
        if(!RefLabFound ) throw new NotFoundException('RefLab does not exist')
        return RefLabFound 
    }

    @Delete(':id')
    async deleteRefLab(@Param('id') id:string){
       try {
           return await this.ReferenciasLaboralesService.deleteRefLabs(Number(id))
       } catch (error) {
           throw new NotFoundException('RefLab does not exist')
       }
    }

    @Put(':id')
    async updateRefLab(@Param('id') id: string, @Body() data: referenciaslaborales){
       try {
           return await this.ReferenciasLaboralesService.updateRefLabs(Number(id), data)
       } catch (error) {
           throw new NotFoundException('RefLab does not exist')
       }
    }

    
}