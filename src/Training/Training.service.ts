import {Injectable} from "@nestjs/common";
import { Training } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class TrainingService{
    constructor(private prisma: PrismaService){}

    async getAllTraining(): Promise<Training[]>{
        return this.prisma.training.findMany();
    }

    async getTrainingById(id: number): Promise<Training[]>{
        return this.prisma.training.findMany({
            where:{
                idSubscription:id
            }
        });
    }

    async createTraining(data: Training): Promise<Training>{
        return this.prisma.training.create({
                data
        });
    }

    async updateTraining(id: number, data: Training): Promise<Training>{
        return this.prisma.training.update({
            where:{
                id
            },
            data
        })
    }
    async deleteTraining(id: number): Promise<Training>{
        return this.prisma.training.delete({
            where:{
                id
            }
        });
    }
    
}