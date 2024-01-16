import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException} from "@nestjs/common";
import { KnowledgeAssessmentService } from "./KnowledgeAssessment.service";
import { KnowledgeAssessment } from "@prisma/client";


@Controller('KnowledgeAssessment')
export class KnowledgeAssessmentController {

    constructor(private readonly KnowledgeAssessmentService:KnowledgeAssessmentService){}

    
    @Get()
    async getAllKnowledgeAssessment() {
        return await this.KnowledgeAssessmentService.getAllKnowledgeAssessment()
    }

    @Post()
    async createKnowledgeAssessment(@Body() data: KnowledgeAssessment) {
        return await this.KnowledgeAssessmentService.createKnowledgeAssessment(data)
    }

    @Get(':id')
    async getKnowledgeAssessmentById(@Param('id') id:string){
        const KnowledgeAssessmentFound = await this.KnowledgeAssessmentService.getKnowledgeAssessmentById(Number(id))
        if(!KnowledgeAssessmentFound ) throw new NotFoundException('Knowledge Assessment does not exist')
        return KnowledgeAssessmentFound 
    }

    @Delete(':id')
    async deleteKnowledgeAssessment(@Param('id') id:string){
       try {
           return await this.KnowledgeAssessmentService.deleteKnowledgeAssessment(Number(id))
       } catch (error) {
           throw new NotFoundException('Knowledge Assessment does not exist')
       }
    }

    @Put(':id')
    async updateKnowledgeAssessment(@Param('id') id: string, @Body() data: KnowledgeAssessment){
       try {
           return await this.KnowledgeAssessmentService.updateKnowledgeAssessment(Number(id), data)
       } catch (error) {
           throw new NotFoundException('Knowledge Assessment does not exist')
       }
    }

   
}