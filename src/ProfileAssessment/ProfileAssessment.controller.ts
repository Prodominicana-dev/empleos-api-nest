import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException} from "@nestjs/common";
import { ProfileAssessmentService } from "./ProfileAssessment.service";
import { ProfileAssessment } from "@prisma/client";


@Controller('ProfileAssessment')
export class ProfileAssessmentController {

    constructor(private readonly ProfileAssessmentService:ProfileAssessmentService){}

    
    @Get()
    async getAllProfile() {
        return await this.ProfileAssessmentService.getAllProfileAssessment()
    }

    @Post()
    async createProfile(@Body() data: ProfileAssessment) {
        return await this.ProfileAssessmentService.createProfileAssessment(data)
    }

    @Get(':id')
    async getProfileById(@Param('id') id:string){
        const ProfileFound = await this.ProfileAssessmentService.getProfileAssessmentById(Number(id))
        if(!ProfileFound ) throw new NotFoundException('Profile does not exist')
        return ProfileFound 
    }

    @Delete(':id')
    async deleteProfile(@Param('id') id:string){
       try {
           return await this.ProfileAssessmentService.deleteProfileAssessment(Number(id))
       } catch (error) {
           throw new NotFoundException('Profile does not exist')
       }
    }

    @Put(':id')
    async updateProfile(@Param('id') id: string, @Body() data: ProfileAssessment){
       try {
           return await this.ProfileAssessmentService.updateProfileAssessment(Number(id), data)
       } catch (error) {
           throw new NotFoundException('Profile does not exist')
       }
    }

    
}