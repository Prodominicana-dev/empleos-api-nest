import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException} from "@nestjs/common";
import { TrainingService } from "./Training.service";
import { Training } from "@prisma/client";


@Controller('Training')
export class TrainingController {

    constructor(private readonly TrainingService:TrainingService){}

    
    @Get()
    async getAllTraining() {
        return await this.TrainingService.getAllTraining()
    }

    @Post()
    async createTraining(@Body() data: Training) {
        return await this.TrainingService.createTraining(data)
    }

    @Get(':id')
    async getTrainingById(@Param('id') id:string){
        const TrainingFound = await this.TrainingService.getTrainingById(Number(id))
        if(!TrainingFound ) throw new NotFoundException('Training does not exist')
        return TrainingFound 
    }

    @Delete(':id')
    async deleteTraining(@Param('id') id:string){
       try {
           return await this.TrainingService.deleteTraining(Number(id))
       } catch (error) {
           throw new NotFoundException('Training does not exist')
       }
    }

    @Put(':id')
    async updateTraining(@Param('id') id: string, @Body() data: Training){
       try {
           return await this.TrainingService.updateTraining(Number(id), data)
       } catch (error) {
           throw new NotFoundException('Training does not exist')
       }
    }

    
}