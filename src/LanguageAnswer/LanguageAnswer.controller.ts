import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException} from "@nestjs/common";
import { LanguageAnswerService } from "./LanguageAnswer.service";
import { LanguageAnswer } from "@prisma/client";


@Controller()
export class LanguageAnswerController {

    constructor(private readonly LanguageAnswerService:LanguageAnswerService){}

    
    @Get('LanguageAnswer')
    async getAllLanguageAnswer() {
        return await this.LanguageAnswerService.getAllLanguageAnswer()
    }

    @Post('LanguageAnswer')
    async createLanguageAnswer(@Body() data: LanguageAnswer) {
        return await this.LanguageAnswerService.createLanguageAnswer(data)
    }

    @Post('LanguageAnswerGet')
    async getLanguageAnswerByIdJobOpeningAndIdSubscription(@Body() data:any){
        return await this.LanguageAnswerService.getLanguageAnswerByIdJobOpeningAndIdSubscription(data);
    }

    @Delete('LanguageAnswer/:id')
    async deleteLanguageAnswer(@Param('id') id:string){
       try {
           return await this.LanguageAnswerService.deleteLanguageAnswer(Number(id))
       } catch (error) {
           throw new NotFoundException('Language Answer does not exist')
       }
    }

    @Put('LanguageAnswer/:id')
    async updateLanguageAnswer(@Param('id') id: string, @Body() data: LanguageAnswer){
       try {
           return await this.LanguageAnswerService.updateLanguageAnswer(Number(id), data)
       } catch (error) {
           throw new NotFoundException('Profile Answer does not exist')
       }
    }

    
}