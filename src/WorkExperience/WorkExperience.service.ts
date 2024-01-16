import {Injectable} from "@nestjs/common";
import { WorkExperience } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class WorkExperienceService{
    constructor(private prisma: PrismaService){}

    async getAllWorkExperience(): Promise<WorkExperience[]>{
        return this.prisma.workExperience.findMany();
    }

    async getWorkExperienceById(id: number): Promise<WorkExperience[]>{
        return this.prisma.workExperience.findMany({
            where:{
                idSubscription:id
            }
        });
    }

    async createWorkExperience(data: WorkExperience): Promise<WorkExperience>{
        data.registrationDate = new Date();
        return this.prisma.workExperience.create({
                data
        });
    }

    async updateWorkExperience(id: number, data: WorkExperience): Promise<WorkExperience>{
        return this.prisma.workExperience.update({
            where:{
                id
            },
            data
        })
    }
    async deleteWorkExperience(id: number): Promise<WorkExperience>{
        return this.prisma.workExperience.delete({
            where:{
                id
            }
        });
    }
    
}