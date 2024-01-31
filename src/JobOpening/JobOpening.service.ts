import { Injectable } from "@nestjs/common";
import { JobOpening } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class JobOpeningService{
    constructor(private prisma: PrismaService){}

    async getAllJobOpening(): Promise<JobOpening[]>{
        return await this.prisma.jobOpening.findMany({
            orderBy: {
              
              // Por ejemplo, "createdAt" para ordenar por fecha de creación
              registrationDate: 'asc', // o 'desc' para orden descendente
            },
        });
    }

    async getJobOpeningById(id: number): Promise<JobOpening>{
        return this.prisma.jobOpening.findUnique({
            where:{
                id
            }
        });
    }

    async getJobOpeningIdCategory(idCategory: number):Promise<JobOpening[]>{
        return this.prisma.jobOpening.findMany({
            where:{
                idCategory
            }
        })
    }

    async createJobOpening(data: JobOpening): Promise<JobOpening | Error> {
        try {
            data.idCategory = Number(data.idCategory);
            data.registrationDate = new Date();
            return  await this.prisma.jobOpening.create({ data });
            
        } catch (error) {
            
            console.error("Error creating the job opening:", error);
            throw new Error("Job opening could not be created");
        }
    }

    async updateJobOpening(id: number, data: JobOpening): Promise<JobOpening>{
        return this.prisma.jobOpening.update({
            where:{
                id 
            },
            data
        })
    }
    async deleteJobOpening(id: number): Promise<JobOpening>{
        return this.prisma.jobOpening.delete({
            where:{
                id
            }
        });
    }
    
}