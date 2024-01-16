import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException} from "@nestjs/common";
import { KnowledgeAnswerService } from "./KnowledgeAnswer.service";
import { KnowledgeAnswer } from "@prisma/client";


@Controller()
export class KnowledgeAnswerController {

    constructor(private readonly KnowledgeAnswerService:KnowledgeAnswerService){}

    
    @Get('KnowledgeAnswer')
    async getAllLanguageAnswer() {
        return await this.KnowledgeAnswerService.getAllKnowledgeAnswer()
    }

    @Post('KnowledgeAnswer')
    async createLanguageAnswer(@Body() data: KnowledgeAnswer) {
        return await this.KnowledgeAnswerService.createKnowledgeAnswer(data)
    }

    @Post('KnowledgeAnswerGet')
    async getKnowledgeAnswerByIdJobOpeningAndIdSubscription(@Body() data:any){
        return await this.KnowledgeAnswerService.getKnowledgeAnswerByIdJobOpeningAndIdSubscription(data);
    }

    @Delete('KnowledgeAnswer/:id')
    async deleteKnowledgeAnswer(@Param('id') id:string){
       try {
           return await this.KnowledgeAnswerService.deleteKnowledgeAnswer(Number(id))
       } catch (error) {
           throw new NotFoundException('Knowledge Answer does not exist')
       }
    } 

    @Put('KnowledgeAnswer/:id')
    async updateLanguageAnswer(@Param('id') id: string, @Body() data: KnowledgeAnswer){
       try {
           return await this.KnowledgeAnswerService.updateKnowledgeAnswer(Number(id), data)
       } catch (error) {
           throw new NotFoundException('Knowledge Answer does not exist')
       }
    }

    
}