import {Injectable} from "@nestjs/common";
import { Education } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class EducationService{
    constructor(private prisma: PrismaService){}

    async getAllEducation(): Promise<Education[]>{
        return this.prisma.education.findMany();
    }

    async getEducationById(id: number): Promise<Education[]>{
        return this.prisma.education.findMany({
            where:{
                idSubscription:id
            }
        });
    }

    async createEducation(data: Education): Promise<Education>{
        data.registrationDate=new Date();
        return this.prisma.education.create({
                data
        });
    }

    async updateEducation(id: number, data: Education): Promise<Education>{
        return this.prisma.education.update({
            where:{
                id
            },
            data
        })
    }
    async deleteEducation(id: number): Promise<Education>{
        return this.prisma.education.delete({
            where:{
                id
            }
        });
    }
    
}