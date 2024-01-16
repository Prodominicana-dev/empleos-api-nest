import {Injectable} from "@nestjs/common";
import { ProfileAnswer } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ProfileAnswerService{
    constructor(private prisma: PrismaService){}

    async getAllProfileAnswer(): Promise<ProfileAnswer[]>{
        return this.prisma.profileAnswer.findMany();
    }

    async getProfileAnswerByIdJobOpeningAndIdSubscription(data: any): Promise<ProfileAnswer[] | null> {
        try {
          const { idSubscription, idJobOpening } = data;
          const profileAnswers = await this.prisma.profileAnswer.findMany({
            where: {
              idSubscription,
              idJobOpening
            },
            select: {
              id: true,
              idJobOpening: true,
              idSubscription: true,
              sex: true,
              edad: true,
              workExperience: true,
              education: true,
              sexAssessment:true,
              edadAssessment:true,
              workExperienceAssessment:true,
              educationAssessment:true,
              status:true,
              registrationDate: true
            }
          }); 
      
          return profileAnswers;
        } catch (error) {
          console.error('Error al obtener respuestas de perfil:', error);
          return null;
        }
      }

    async createProfileAnswer(data: ProfileAnswer): Promise<ProfileAnswer>{
        data.registrationDate = new Date();
        return this.prisma.profileAnswer.create({
                data
        }); 
    }

    async updateProfileAnswer(id: number, data: ProfileAnswer): Promise<ProfileAnswer>{
        return this.prisma.profileAnswer.update({
            where:{
                id
            },
            data
        })
    }
    async deleteProfileAnswer(id: number): Promise<ProfileAnswer>{
        return this.prisma.profileAnswer.delete({
            where:{
                id
            }
        });
    }
    
}