import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException} from "@nestjs/common";
import { InformePerfilService } from "./InfPer.service";
import { informeperfil } from "@prisma/client";


@Controller('InformePerfil')
export class InformePerfilController {

    constructor(private readonly InformePerfilService:InformePerfilService){}

    
    @Get()
    async getAllInfPer() {
        return await this.InformePerfilService.getAllInfPer()
    }

    @Post()
    async createInfPer(@Body() data: informeperfil) {
        return await this.InformePerfilService.createInfPer(data)
    }

    @Get(':id')
    async getInfPerById(@Param('id') id:string){
        const InfPerFound = await this.InformePerfilService.getInfPerById(Number(id))
        if(!InfPerFound ) throw new NotFoundException('InfPer does not exist')
        return InfPerFound 
    }

    @Delete(':id')
    async deleteInfPer(@Param('id') id:string){
       try {
           return await this.InformePerfilService.deleteInfPers(Number(id))
       } catch (error) {
           throw new NotFoundException('InfPer does not exist')
       }
    }

    @Put(':id')
    async updateInfPer(@Param('id') id: string, @Body() data: informeperfil){
       try {
           return await this.InformePerfilService.updateInfPers(Number(id), data)
       } catch (error) {
           throw new NotFoundException('InfPer does not exist')
       }
    }

    
}