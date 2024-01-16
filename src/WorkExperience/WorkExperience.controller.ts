import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException} from "@nestjs/common";
import { WorkExperienceService } from "./WorkExperience.service";
import { WorkExperience } from "@prisma/client";


@Controller('WorkExperience')
export class WorkExperienceController {

    constructor(private readonly WorkExperienceService:WorkExperienceService){}

    
    @Get()
    async getAllWorkExperience() {
        return await this.WorkExperienceService.getAllWorkExperience()
    }

    @Post()
    async createWorkExperience(@Body() data: WorkExperience) {
        return await this.WorkExperienceService.createWorkExperience(data)
    }

    @Get(':id')
    async getWorkExperienceById(@Param('id') id:string){
        const WorkExperienceFound = await this.WorkExperienceService.getWorkExperienceById(Number(id))
        if(!WorkExperienceFound ) throw new NotFoundException('Work experience does not exist')
        return WorkExperienceFound 
    }

    @Delete(':id')
    async deleteWorkExperience(@Param('id') id:string){
       try {
           return await this.WorkExperienceService.deleteWorkExperience(Number(id))
       } catch (error) {
           throw new NotFoundException('Work experience does not exist')
       }
    }

    @Put(':id')
    async updateWorkExperience(@Param('id') id: string, @Body() data: WorkExperience){
       try {
           return await this.WorkExperienceService.updateWorkExperience(Number(id), data)
       } catch (error) {
           throw new NotFoundException('Work experience does not exist')
       }
    }

    
}