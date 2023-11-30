import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException} from "@nestjs/common";
import { PuestoSolicitadoService } from "./PuSo.service";
import { usuariovacante } from "@prisma/client";


@Controller()
export class PuestoSolicitadoController {

    constructor(private readonly PuestoSolicitadoService:PuestoSolicitadoService){}

    
    @Get('PuestoSolicitado')
    async getAllPuSo() {
        return await this.PuestoSolicitadoService.getAllPuSo();
    }

    @Get('PuestoSolicitado01')
    async getAllIdVacantePuSo(){
        return  await this.PuestoSolicitadoService.getAllIdVacantePuSo();
        
    }

    @Get('getPuSoByIdSuscripcion/:idsuscripcion')
    async getPuSoByIdSuscripcion(@Param('idsuscripcion') idsuscripcion:string){
        const PuSoFound = await this.PuestoSolicitadoService.getPuSoByIdSuscripcion(Number(idsuscripcion))
        if(!PuSoFound ) throw new NotFoundException('Puesto Solicitado does not exist')
        return PuSoFound 
    }

    @Post('PuestoSolicitado1')
    async getPuSoIdVaIdSu(@Body() data:any){
        return await this.PuestoSolicitadoService.getPuSoIdVaIdSu(data);
    }

    @Post('PuestoSolicitado')
    async createPuSo(@Body() data: usuariovacante) {
        return await this.PuestoSolicitadoService.createPuSo(data);
    }

    @Get('PuestoSolicitado/:id')
    async getPuSoById(@Param('id') id:string){
        const PuSoFound = await this.PuestoSolicitadoService.getPuSoById(Number(id));
        if(!PuSoFound ) throw new NotFoundException('Puesto Solicitado does not exist')
        return PuSoFound 
    }

    @Delete('PuestoSolicitado2/:idvacante')
    async deletePuSoByIdVacante(@Param('idvacante') idvacante:string){
        try {
            return await this.PuestoSolicitadoService.deletePuSoByIdVacante(Number(idvacante));
        }
        catch (error){
            throw new NotFoundException('Puesto Solicitado does not exist')
        }
    }

    @Delete('PuestoSolicitado/:id')
    async deletePuSo(@Param('id') id:string){
       try {
           return await this.PuestoSolicitadoService.deletePuSos(Number(id));
       } catch (error) {
           throw new NotFoundException('Puesto Solicitado does not exist')
       }
    }

    @Put('PuestoSolicitado/:id')
    async updatePuSo(@Param('id') id: string, @Body() data: usuariovacante){
       try {
           return await this.PuestoSolicitadoService.updatePuSos(Number(id), data);
       } catch (error) {
           throw new NotFoundException('Puesto Solicitado does not exist')
       }
    }

    
}