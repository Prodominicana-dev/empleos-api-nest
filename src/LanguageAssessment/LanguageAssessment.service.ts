import {Injectable} from "@nestjs/common";
import { LanguageAssessment } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class LanguageAssessmentService{
    constructor(private prisma: PrismaService){}

    async getAllLanguageAssessment(): Promise<LanguageAssessment[]>{
        return this.prisma.languageAssessment.findMany();
    }

    async getLanguageAssessmentById(id: number): Promise<LanguageAssessment[]>{
        return this.prisma.languageAssessment.findMany({
            where:{
                idJobOpening:id
            }
        });
    }

    async createLanguageAssessment(data: LanguageAssessment): Promise<LanguageAssessment>{
        data.registrationDate = new Date();
        return this.prisma.languageAssessment.create({
                data
        });
    }

    async updateLanguageAssessment(id: number, data: LanguageAssessment): Promise<LanguageAssessment>{
        return this.prisma.languageAssessment.update({
            where:{
                id
            },
            data
        })
    }
    async deleteLanguageAssessment(id: number): Promise<LanguageAssessment>{
        return this.prisma.languageAssessment.delete({
            where:{
                id
            }
        });
    }
    
}