import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException} from "@nestjs/common";
import { VacantesService } from "./Vacantes.service";
import { vacantes } from "@prisma/client";


@Controller('Vacantes')
export class VacantesController {

    constructor(private readonly VacantesService:VacantesService){}

    
    @Get()
    async getAllVacante() {
        return await this.VacantesService.getAllVacante()
    }

    @Post()
    async createVacante(@Body() data: vacantes) {
        return await this.VacantesService.createVacante(data)
    }

    @Get(':id')
    async getVacanteById(@Param('id') id:string){
        const VacanteFound = await this.VacantesService.getVacanteById(Number(id))
        if(!VacanteFound ) throw new NotFoundException('Vacante does not exist')
        return VacanteFound 
    }
    @Get('Categoria/:id')
    async getVacanteByIdCategoria(@Param('id') id:string){
        const VacanteFound = await this.VacantesService.getVacanteIdCategoria(Number(id))
        if(!VacanteFound ) throw new NotFoundException('Vacantes do not exist')
        return VacanteFound 
    }

    @Delete(':id')
    async deleteVacante(@Param('id') id:string){
       try {
           return await this.VacantesService.deleteVacantes(Number(id))
       } catch (error) {
           throw new NotFoundException('Vacante does not exist')
       }
    }

    @Put(':id')
    async updateVacante(@Param('id') id: string, @Body() data: vacantes){
       try {
           return await this.VacantesService.updateVacantes(Number(id), data)
       } catch (error) {
           throw new NotFoundException('Vacante does not exist')
       }
    }

    
}