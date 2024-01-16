import {Injectable} from "@nestjs/common";
import { Profile } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ProfileService{
    constructor(private prisma: PrismaService){}

    async getAllProfile(): Promise<Profile[]>{
        return this.prisma.profile.findMany();
    }

    async getProfileById(id: number): Promise<Profile[]>{
        return this.prisma.profile.findMany({
            where:{
                idSubscription:id
            }
        });
    }

    async createProfile(data: Profile): Promise<Profile>{
        data.registrationDate=new Date()
        return this.prisma.profile.create({
                data
        });
    }

    async updateProfile(id: number, data: Profile): Promise<Profile>{
        return this.prisma.profile.update({
            where:{
                id
            },
            data
        })
    }
    async deleteProfile(id: number): Promise<Profile>{
        return this.prisma.profile.delete({
            where:{
                id
            }
        });
    }
    
}