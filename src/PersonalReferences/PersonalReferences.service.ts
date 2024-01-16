import {Injectable} from "@nestjs/common";
import { PersonalReferences } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class PersonalReferencesService{
    constructor(private prisma: PrismaService){}

    async getAllPersonalReferences(): Promise<PersonalReferences[]>{
        return this.prisma.personalReferences.findMany();
    }

    async getPersonalReferencesById(id: number): Promise<PersonalReferences[]>{
        return this.prisma.personalReferences.findMany({
            where:{
                idSubscription:id
            }
        });
    }

    async createPersonalReferences(data: PersonalReferences): Promise<PersonalReferences>{
        data.registrationDate = new Date();
        return this.prisma.personalReferences.create({
                data
        });
    }

    async updatePersonalReferences(id: number, data: PersonalReferences): Promise<PersonalReferences>{
        return this.prisma.personalReferences.update({
            where:{
                id
            },
            data
        })
    }
    async deletePersonalReferences(id: number): Promise<PersonalReferences>{
        return this.prisma.personalReferences.delete({
            where:{
                id
            }
        });
    }
    
}