import {Injectable} from "@nestjs/common";
import { ProfileParticulars } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ProfileParticularsService{
    constructor(private prisma: PrismaService){}

    async getAllProfileParticulars(): Promise<ProfileParticulars[]>{
        return this.prisma.profileParticulars.findMany();
    }

    async getProfileParticularsById(id: number): Promise<ProfileParticulars[]>{
        return this.prisma.profileParticulars.findMany({
            where:{
                idJobOpening:id
            }
        });
    }

    async createProfileParticulars(data: ProfileParticulars): Promise<ProfileParticulars>{
        data.registrationDate=new Date()
        return this.prisma.profileParticulars.create({
                data
        });
    }

    async updateProfileParticulars(id: number, data: ProfileParticulars): Promise<ProfileParticulars>{
        return this.prisma.profileParticulars.update({
            where:{
                id
            },
            data
        })
    }
    async deleteProfileParticulars(id: number): Promise<ProfileParticulars>{
        return this.prisma.profileParticulars.delete({
            where:{
                id
            }
        });
    }
    
}