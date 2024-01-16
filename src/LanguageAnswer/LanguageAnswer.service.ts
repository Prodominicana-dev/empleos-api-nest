import {Injectable} from "@nestjs/common";
import { LanguageAnswer } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class LanguageAnswerService{
    constructor(private prisma: PrismaService){}

    async getAllLanguageAnswer(): Promise<LanguageAnswer[]>{
        return this.prisma.languageAnswer.findMany();
    }

    async getLanguageAnswerByIdJobOpeningAndIdSubscription(data:any): Promise<LanguageAnswer[] | null> {
        const {idSubscription,idJobOpening} = data;
        return this.prisma.languageAnswer.findMany({
            where: {
                idSubscription,
                idJobOpening
            },
            select: {
                id: true,
                idJobOpening: true,
                idSubscription: true,
                language: true,
                answerLanguage: true,
                answerLanguageAssessment: true,
                status: true,
                registrationDate:true   
            }
        });
    }

    async createLanguageAnswer(data: LanguageAnswer): Promise<LanguageAnswer>{
        data.registrationDate = new Date();
        return this.prisma.languageAnswer.create({
                data
        });
    }

    async updateLanguageAnswer(id: number, data: LanguageAnswer): Promise<LanguageAnswer>{
        return this.prisma.languageAnswer.update({
            where:{
                id
            },
            data
        })
    }
    async deleteLanguageAnswer(id: number): Promise<LanguageAnswer>{
        return this.prisma.languageAnswer.delete({
            where:{
                id
            }
        });
    }
    
}