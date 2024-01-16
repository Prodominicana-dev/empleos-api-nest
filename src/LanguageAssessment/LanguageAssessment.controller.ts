import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException} from "@nestjs/common";
import { LanguageAssessmentService } from "./LanguageAssessment.service";
import { LanguageAssessment } from "@prisma/client";


@Controller('LanguageAssessment')
export class LanguageAssessmentController {

    constructor(private readonly LanguageAssessmentService:LanguageAssessmentService){}

    
    @Get()
    async getAllLanguageAssessment() {
        return await this.LanguageAssessmentService.getAllLanguageAssessment()
    }

    @Post()
    async createLanguageAssessment(@Body() data: LanguageAssessment) {
        return await this.LanguageAssessmentService.createLanguageAssessment(data)
    }

    @Get(':id')
    async getLanguageAssessmentById(@Param('id') id:string){
        const LanguageFound = await this.LanguageAssessmentService.getLanguageAssessmentById(Number(id))
        if(!LanguageFound ) throw new NotFoundException('Language Assessment does not exist')
        return LanguageFound 
    }

    @Delete(':id') 
    async deleteLanguageAssessment(@Param('id') id:string){
       try {
           return await this.LanguageAssessmentService.deleteLanguageAssessment(Number(id))
       } catch (error) {
           throw new NotFoundException('Language Assessment does not exist')
       }
    }

    @Put(':id')
    async updateLanguageAssessment(@Param('id') id: string, @Body() data: LanguageAssessment){
       try {
           return await this.LanguageAssessmentService.updateLanguageAssessment(Number(id), data)
       } catch (error) {
           throw new NotFoundException('Language Assessment does not exist')
       }
    }

    
}