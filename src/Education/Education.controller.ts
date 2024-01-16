import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException} from "@nestjs/common";
import { EducationService } from "./Education.service";
import { Education } from "@prisma/client";


@Controller('Education')
export class EducationController {

    constructor(private readonly EducationService:EducationService){}

    
    @Get()
    async getAllEducation() {
        return await this.EducationService.getAllEducation()
    }

    @Post()
    async createEducation(@Body() data: Education) {
        return await this.EducationService.createEducation(data)
    }

    @Get(':id')
    async getEducationById(@Param('id') id:string){
        const EducationFound = await this.EducationService.getEducationById(Number(id))
        if(!EducationFound ) throw new NotFoundException('Education does not exist')
        return EducationFound 
    }

    @Delete(':id')
    async deleteEducation(@Param('id') id:string){
       try {
           return await this.EducationService.deleteEducation(Number(id))
       } catch (error) {
           throw new NotFoundException('Education does not exist')
       }
    }

    @Put(':id')
    async updateEducation(@Param('id') id: string, @Body() data: Education){
       try {
           return await this.EducationService.updateEducation(Number(id), data)
       } catch (error) {
           throw new NotFoundException('Education does not exist')
       }
    }

   
}