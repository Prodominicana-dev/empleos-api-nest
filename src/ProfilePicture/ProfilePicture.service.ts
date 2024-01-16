import {Injectable} from "@nestjs/common";
import { ProfilePicture } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ProfilePictureService{
    constructor(private prisma: PrismaService){}

    async getAllProfilePicture(): Promise<ProfilePicture[]>{
        return this.prisma.profilePicture.findMany();
    }

    async getProfilePictureById(id: number): Promise<ProfilePicture[]>{
        return this.prisma.profilePicture.findMany({
            where:{
                idSubscription:id
            }
        });
    }

    async createProfilePicture(data: ProfilePicture): Promise<ProfilePicture>{
        return this.prisma.profilePicture.create({
                data
        });
    }

    async updateProfilePicture(id: number, data: ProfilePicture): Promise<ProfilePicture>{
        return this.prisma.profilePicture.update({
            where:{
                id
            },
            data
        })
    }
    async deleteProfilePicture(id: number): Promise<ProfilePicture>{
        return this.prisma.profilePicture.delete({
            where:{
                id
            }
        });
    }
    
}