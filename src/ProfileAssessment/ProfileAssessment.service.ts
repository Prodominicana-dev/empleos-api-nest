import {Injectable} from "@nestjs/common";
import { ProfileAssessment } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ProfileAssessmentService{
    constructor(private prisma: PrismaService){}

    async getAllProfileAssessment(): Promise<ProfileAssessment[]>{
        return this.prisma.profileAssessment.findMany();
    }

    async getProfileAssessmentById(id: number): Promise<ProfileAssessment[]>{
        return this.prisma.profileAssessment.findMany({
            where:{
                idJobOpening:id
            }
        });
    }

    async createProfileAssessment(data: ProfileAssessment): Promise<ProfileAssessment>{
        data.idJobOpening=Number(data.idJobOpening);
        data.registrationDate=new Date()
        return this.prisma.profileAssessment.create({
                data
        });
    }

    async updateProfileAssessment(id: number, data: ProfileAssessment): Promise<ProfileAssessment>{
        return this.prisma.profileAssessment.update({
            where:{
                id
            },
            data
        })
    }
    async deleteProfileAssessment(id: number): Promise<ProfileAssessment>{
        return this.prisma.profileAssessment.delete({
            where:{
                id
            }
        });
    }
    
}