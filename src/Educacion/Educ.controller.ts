import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException} from "@nestjs/common";
import { EducacionService } from "./Educ.service";
import { educacion } from "@prisma/client";


@Controller('Educacion')
export class EducacionController {

    constructor(private readonly EducacionService:EducacionService){}

    
    @Get()
    async getAllEduc() {
        return await this.EducacionService.getAllEduc()
    }

    @Post()
    async createEduc(@Body() data: educacion) {
        return await this.EducacionService.createEduc(data)
    }

    @Get(':id')
    async getEducById(@Param('id') id:string){
        const EducFound = await this.EducacionService.getEducById(Number(id))
        if(!EducFound ) throw new NotFoundException('Doc does not exist')
        return EducFound 
    }

    @Delete(':id')
    async deleteEduc(@Param('id') id:string){
       try {
           return await this.EducacionService.deleteEducs(Number(id))
       } catch (error) {
           throw new NotFoundException('Doc does not exist')
       }
    }

    @Put(':id')
    async updateEduc(@Param('id') id: string, @Body() data: educacion){
       try {
           return await this.EducacionService.updateEducs(Number(id), data)
       } catch (error) {
           throw new NotFoundException('Doc does not exist')
       }
    }

   
}