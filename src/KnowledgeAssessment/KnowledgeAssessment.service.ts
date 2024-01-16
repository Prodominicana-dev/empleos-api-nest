import {Injectable} from "@nestjs/common";
import { KnowledgeAssessment } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class KnowledgeAssessmentService{
    constructor(private prisma: PrismaService){}

    async getAllKnowledgeAssessment(): Promise<KnowledgeAssessment[]>{
        return this.prisma.knowledgeAssessment.findMany();
    }

    async getKnowledgeAssessmentById(id: number): Promise<KnowledgeAssessment[]>{
        return this.prisma.knowledgeAssessment.findMany({
            where:{
                idJobOpening:id
            }
        });
    }

    async createKnowledgeAssessment(data: KnowledgeAssessment): Promise<KnowledgeAssessment>{
        return this.prisma.knowledgeAssessment.create({
                data
        });
    }

    async updateKnowledgeAssessment(id: number, data: KnowledgeAssessment): Promise<KnowledgeAssessment>{
        return this.prisma.knowledgeAssessment.update({
            where:{
                id
            },
            data
        })
    }
    async deleteKnowledgeAssessment(id: number): Promise<KnowledgeAssessment>{
        return this.prisma.knowledgeAssessment.delete({
            where:{
                id
            }
        });
    }
    
}