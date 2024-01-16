import {Injectable} from "@nestjs/common";
import { KnowledgeAnswer } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class KnowledgeAnswerService{
    constructor(private prisma: PrismaService){}

    async getAllKnowledgeAnswer(): Promise<KnowledgeAnswer[]>{
        return this.prisma.knowledgeAnswer.findMany();
    }

    async getKnowledgeAnswerByIdJobOpeningAndIdSubscription(data:any): Promise<KnowledgeAnswer[] | null> {
        const {idSubscription,idJobOpening} = data;
        return this.prisma.knowledgeAnswer.findMany({
            where: {
                idSubscription,
                idJobOpening
            },
            select: {
                id: true,
                idJobOpening: true,
                idSubscription: true,
                knowledge: true,
                answerKnowledge: true,
                answerKnowledgeAssessment: true,
                status: true,
                registrationDate : true, 
            }
        });
    }

    async createKnowledgeAnswer(data: KnowledgeAnswer): Promise<KnowledgeAnswer>{
        data.registrationDate = new Date();
        return this.prisma.knowledgeAnswer.create({
                data
        });
    }

    async updateKnowledgeAnswer(id: number, data: KnowledgeAnswer): Promise<KnowledgeAnswer>{
        return this.prisma.knowledgeAnswer.update({
            where:{
                id
            },
            data
        })
    }
    async deleteKnowledgeAnswer(id: number): Promise<KnowledgeAnswer>{
        return this.prisma.knowledgeAnswer.delete({
            where:{
                id
            }
        });
    }
    
}