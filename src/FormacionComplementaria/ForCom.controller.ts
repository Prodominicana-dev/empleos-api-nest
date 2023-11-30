import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException} from "@nestjs/common";
import { FormacionComplementariaService } from "./ForCom.service";
import { formacioncomple } from "@prisma/client";


@Controller('DiplCurSeminSert')
export class FormacionComplementariaController {

    constructor(private readonly FormacionComplementariaService:FormacionComplementariaService){}

    
    @Get()
    async getAllForCom() {
        return await this.FormacionComplementariaService.getAllForCom()
    }

    @Post()
    async createForCom(@Body() data: formacioncomple) {
        return await this.FormacionComplementariaService.createForCom(data)
    }

    @Get(':id')
    async getForComById(@Param('id') id:string){
        const ForComFound = await this.FormacionComplementariaService.getForComById(Number(id))
        if(!ForComFound ) throw new NotFoundException('ForCom does not exist')
        return ForComFound 
    }

    @Delete(':id')
    async deleteForCom(@Param('id') id:string){
       try {
           return await this.FormacionComplementariaService.deleteForComs(Number(id))
       } catch (error) {
           throw new NotFoundException('ForCom does not exist')
       }
    }

    @Put(':id')
    async updateForCom(@Param('id') id: string, @Body() data: formacioncomple){
       try {
           return await this.FormacionComplementariaService.updateForComs(Number(id), data)
       } catch (error) {
           throw new NotFoundException('ForCom does not exist')
       }
    }

    
}