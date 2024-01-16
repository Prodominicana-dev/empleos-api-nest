import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException} from "@nestjs/common";
import { PeriodService } from "./Period.service";
import { Period } from "@prisma/client";


@Controller('Period')
export class PeriodController {

    constructor(private readonly PeriodService:PeriodService){}

    
    @Get()
    async getAllPeriod() {
        return await this.PeriodService.getAllPeriod()
    }

    @Post()
    async createPeriod(@Body() data: Period) {
        return await this.PeriodService.createPeriod(data)
    }

    @Get(':idJobOpening')
    async getAllPeriodById(@Param('idJobOpening') idJobOpening:string){
        const periodFound = await this.PeriodService.getAllPeriodByIdJobOpening(Number(idJobOpening))
        if(!periodFound ) throw new NotFoundException('Period does not exist')
        return periodFound 
    }

    @Delete(':id')
    async deletePeriod(@Param('id') id:string){
       try {
           return await this.PeriodService.deletePeriod(Number(id))
       } catch (error) {
           throw new NotFoundException('Period does not exist')
       }
    }

    @Put(':id')
    async updatePeriod(@Param('id') id: string, @Body() data: Period){
       try {
           return await this.PeriodService.updatePeriod(Number(id), data)
       } catch (error) {
           throw new NotFoundException('Period does not exist')
       }
    }

    
}