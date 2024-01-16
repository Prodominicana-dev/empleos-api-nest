import {Injectable} from "@nestjs/common";
import { ProfileParticularsAnswer } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ProfileParticularsAnswerService{
    constructor(private prisma: PrismaService){}

    async getAllProfileParticularsAnswer(): Promise<ProfileParticularsAnswer[]>{
        return this.prisma.profileParticularsAnswer.findMany();
    }

    async getProfileParticularsAnswerByIdJobOpeningAndIdSubscription(data:any): Promise<ProfileParticularsAnswer[] | null> {
        const {idSubscription,idJobOpening} = data;
        return this.prisma.profileParticularsAnswer.findMany({
            where: {
                idSubscription,
                idJobOpening
            },
            select: {
                id: true,
                idJobOpening : true,                      
                idSubscription: true,
                ask: true,
                answerProfileParticulars: true,
                answerProfileParticularsAssessment: true,
                status: true,
                registrationDate: true,  
            }
        });
    }

    async createProfileParticularsAnswer(data: ProfileParticularsAnswer): Promise<ProfileParticularsAnswer>{
        data.registrationDate=new Date();
        return this.prisma.profileParticularsAnswer.create({
                data
        });
    }

    async updateProfileParticularsAnswer(id: number, data: ProfileParticularsAnswer): Promise<ProfileParticularsAnswer>{
        return this.prisma.profileParticularsAnswer.update({
            where:{
                id
            },
            data
        })
    }
    async deleteProfileParticularsAnswer(id: number): Promise<ProfileParticularsAnswer>{
        return this.prisma.profileParticularsAnswer.delete({
            where:{
                id
            }
        });
    }
    
}