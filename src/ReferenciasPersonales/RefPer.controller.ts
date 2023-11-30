import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException} from "@nestjs/common";
import { ReferenciasPersonalesService } from "./RefPer.service";
import { referenciaspersonales } from "@prisma/client";


@Controller('ReferenciasPersonales')
export class ReferenciasPersonalesController {

    constructor(private readonly ReferenciasPersonalesService:ReferenciasPersonalesService){}

    
    @Get()
    async getAllRefPer() {
        return await this.ReferenciasPersonalesService.getAllRefPer()
    }

    @Post()
    async createRefPer(@Body() data: referenciaspersonales) {
        return await this.ReferenciasPersonalesService.createRefPer(data)
    }

    @Get(':id')
    async getRefPerById(@Param('id') id:string){
        const RefPerFound = await this.ReferenciasPersonalesService.getRefPerById(Number(id))
        if(!RefPerFound ) throw new NotFoundException('RefPer does not exist')
        return RefPerFound 
    }

    @Delete(':id')
    async deleteRefPer(@Param('id') id:string){
       try {
           return await this.ReferenciasPersonalesService.deleteRefPers(Number(id))
       } catch (error) {
           throw new NotFoundException('RefPer does not exist')
       }
    }

    @Put(':id')
    async updateRefPer(@Param('id') id: string, @Body() data: referenciaspersonales){
       try {
           return await this.ReferenciasPersonalesService.updateRefPers(Number(id), data)
       } catch (error) {
           throw new NotFoundException('RefPer does not exist')
       }
    }

    
}