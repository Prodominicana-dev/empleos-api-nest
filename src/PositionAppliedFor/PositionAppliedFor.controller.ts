import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException} from "@nestjs/common";
import { PositionAppliedForService } from "./PositionAppliedFor.service";
import { PositionAppliedFor } from "@prisma/client";


@Controller()
export class PositionAppliedForController {

    constructor(private readonly PositionAppliedForService:PositionAppliedForService){}

    
    @Get('PuestoSolicitado')
    async getAllPositionAppliedFor() {
        return await this.PositionAppliedForService.getAllPositionAppliedFor();
    }

    @Get('PuestoSolicitado01')
    async getAllPositionAppliedForJoin(){
        return  await this.PositionAppliedForService.getAllPositionAppliedForJoin();
        
    }
     
    @Get('PuestoSolicitado3/:idJobOpening')
    async getPositionAppliedForByIdJobOpening(@Param('idJobOpening') idJobOpening:string){
        const PositionAppliedForFound = await this.PositionAppliedForService.getPositionAppliedForByIdJobOpening(Number(idJobOpening))
        if(!PositionAppliedForFound ) throw new NotFoundException('Position applied for does not exist')
        return PositionAppliedForFound 
    }


    @Get('PuestoSolicitado/:idsuscripcion')
    async getPositionAppliedForByIdSubscription(@Param('idsuscripcion') idsuscripcion:string){
        const PositionAppliedForFound = await this.PositionAppliedForService.getPositionAppliedForByIdSubscription(Number(idsuscripcion))
        if(!PositionAppliedForFound ) throw new NotFoundException('Position applied for does not exist')
        return PositionAppliedForFound 
    }

    @Get('PositionAppliedForGet/:idJobOpening')
    async getPositionAppliedForByIdJobOpeningJoin(@Param('idJobOpening') idJobOpening:string){
        const PositionAppliedForFound = await this.PositionAppliedForService.getPositionAppliedForByIdJobOp(Number(idJobOpening))
        if(!PositionAppliedForFound ) throw new NotFoundException('Position applied for does not exist')
        return PositionAppliedForFound 
    }

//PuestoSolicitado1......................
    @Post('PositionAppliedForByIdJobOpeningAndIdSubscription')
    async getPositionAppliedForByIdJobOpeningAndIdSubscription(@Body() data:any){
        return await this.PositionAppliedForService.getPositionAppliedForByIdJobOpeningAndIdSubscription(data);
    }

    @Post('PositionAppliedFor')
    async createPositionAppliedFor(@Body() data: PositionAppliedFor) {
        return await this.PositionAppliedForService.createPositionAppliedFor(data);
    }

    // @Get('PuestoSolicitado/:id')
    // async getPositionAppliedForById(@Param('id') id:string){
    //     const PositionAppliedForFound = await this.PositionAppliedForService.getPositionAppliedForById(Number(id));
    //     if(!PositionAppliedForFound ) throw new NotFoundException('Position applied for does not exist')
    //     return PositionAppliedForFound 
    // }

    @Delete('PuestoSolicitado2/:idJobOpening')
    async deletePositionAppliedForByIdJobOpening(@Param('idJobOpening') idJobOpening:string){
        try {
            return await this.PositionAppliedForService.deletePositionAppliedForByIdJobOpening(Number(idJobOpening));
        }
        catch (error){
            throw new NotFoundException('Position applied for does not exist')
        }
    }

    @Delete('PuestoSolicitado/:id')
    async deletePositionAppliedFor(@Param('id') id:string){
       try {
           return await this.PositionAppliedForService.deletePositionAppliedFor(Number(id));
       } catch (error) {
           throw new NotFoundException('Position applied for does not exist')
       }
    }

    @Put('updatePositionAppliedFor/:id')
    async updatePositionAppliedFor(@Param('id') id: string, @Body() data: PositionAppliedFor){
       try {
           return await this.PositionAppliedForService.updatePositionAppliedFor(Number(id), data);
       } catch (error) {
           throw new NotFoundException('Position applied for does not exist')
       }
    }

    
}