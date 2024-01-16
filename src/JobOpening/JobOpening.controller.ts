import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException} from "@nestjs/common";
import { JobOpeningService } from "./JobOpening.service";
import { JobOpening } from "@prisma/client";


@Controller('JobOpening')
export class JobOpeningController {

    constructor(private readonly JobOpeningService:JobOpeningService){}

    
    @Get()
    async getAllJobOpening() {
        return await this.JobOpeningService.getAllJobOpening()
    }

    @Post()
    async createJobOpening(@Body() data: JobOpening) {
        return await this.JobOpeningService.createJobOpening(data);
    }

    @Get(':id')
    async getJobOpeningById(@Param('id') id:string){
        const JobOpeningFound = await this.JobOpeningService.getJobOpeningById(Number(id))
        if(!JobOpeningFound ) throw new NotFoundException('Job opening does not exist')
        return JobOpeningFound 
    }
    @Get('Categoria/:id')
    async getJobOpeningByIdCategory(@Param('id') id:string){
        const JobOpeningFound = await this.JobOpeningService.getJobOpeningIdCategory(Number(id))
        if(!JobOpeningFound ) throw new NotFoundException('Job opening do not exist')
        return JobOpeningFound 
    }

    @Delete(':id')
    async deleteJobOpening(@Param('id') id:string){
       try {
           return await this.JobOpeningService.deleteJobOpening(Number(id))
       } catch (error) {
           throw new NotFoundException('Job opening does not exist')
       }
    }

    @Put(':id')
    async updateJobOpening(@Param('id') id: string, @Body() data: JobOpening){
       try {
           return await this.JobOpeningService.updateJobOpening(Number(id), data)
       } catch (error) {
           throw new NotFoundException('Job opening does not exist')
       }
    }

    
}