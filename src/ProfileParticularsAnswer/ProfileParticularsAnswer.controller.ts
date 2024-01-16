import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException} from "@nestjs/common";
import { ProfileParticularsAnswerService } from "./ProfileParticularsAnswer.service";
import { ProfileParticularsAnswer } from "@prisma/client";


@Controller()
export class ProfileParticularsAnswerController {

    constructor(private readonly ProfileParticularsAnswerService:ProfileParticularsAnswerService){}

    
    @Get('ProfileParticularsAnswer')
    async getAllProfileParticularsAnswer() {
        return await this.ProfileParticularsAnswerService.getAllProfileParticularsAnswer()
    }

    @Post('ProfileParticularsAnswer')
    async createProfileParticularsAnswer(@Body() data: ProfileParticularsAnswer) {
        return await this.ProfileParticularsAnswerService.createProfileParticularsAnswer(data)
    }

    @Post('ProfileParticularsAnswerGet')
    async getProfileParticularsAnswerByIdJobOpeningAndIdSubscription(@Body() data:any){
        return await this.ProfileParticularsAnswerService.getProfileParticularsAnswerByIdJobOpeningAndIdSubscription(data);
    }

    @Delete('ProfileParticularsAnswer/:id')
    async deleteProfileParticularsAnswer(@Param('id') id:string){
       try {
           return await this.ProfileParticularsAnswerService.deleteProfileParticularsAnswer(Number(id))
       } catch (error) {
           throw new NotFoundException('Profile Particulars Answer does not exist')
       }
    }

    @Put('ProfileParticularsAnswer/:id')
    async updateProfileParticularsAnswer(@Param('id') id: string, @Body() data: ProfileParticularsAnswer){
       try {
           return await this.ProfileParticularsAnswerService.updateProfileParticularsAnswer(Number(id), data)
       } catch (error) {
           throw new NotFoundException('Profile Particulars Answer does not exist')
       }
    }

    
}