import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException} from "@nestjs/common";
import { ProfileAnswerService } from "./ProfileAnswer.service";
import { ProfileAnswer } from "@prisma/client";


@Controller()
export class ProfileAnswerController {

    constructor(private readonly ProfileAnswerService:ProfileAnswerService){}

    
    @Get('ProfileAnswer')
    async getAllProfileAnswer() { 
        return await this.ProfileAnswerService.getAllProfileAnswer()
    }

    @Post('ProfileAnswer')
    async createProfileAnswer(@Body() data: ProfileAnswer) {
        return await this.ProfileAnswerService.createProfileAnswer(data)
    }

    @Post('ProfileAnswerGet')
    async getProfileAnswerByIdJobOpeningAndIdSubscription(@Body() data:any){
        return await this.ProfileAnswerService.getProfileAnswerByIdJobOpeningAndIdSubscription(data);
    }

    @Delete('ProfileAnswer/:id')
    async deleteProfileAnswer(@Param('id') id:string){
       try {
           return await this.ProfileAnswerService.deleteProfileAnswer(Number(id))
       } catch (error) {
           throw new NotFoundException('Profile Answer does not exist')
       }
    }

    @Put('ProfileAnswer/:id')
    async updateProfileAnswer(@Param('id') id: string, @Body() data: ProfileAnswer){
       try {
           return await this.ProfileAnswerService.updateProfileAnswer(Number(id), data)
       } catch (error) {
           throw new NotFoundException('Profile Answer does not exist')
       }
    }

    
}