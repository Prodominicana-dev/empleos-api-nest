import {Injectable} from "@nestjs/common";
import { Language } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class LanguageService{
    constructor(private prisma: PrismaService){}

    async getAllLanguage(): Promise<Language[]>{
        return this.prisma.language.findMany();
    }

    async getLanguageById(id: number): Promise<Language[]>{
        return this.prisma.language.findMany({
            where:{
                idSubscription:id
            }
        });
    }

    async createLanguage(data: Language): Promise<Language>{
        data.registrationDate=new Date();
        return this.prisma.language.create({
                data
        });
    }

    async updateLanguage(id: number, data: Language): Promise<Language>{
        return this.prisma.language.update({
            where:{
                id
            },
            data
        })
    }
    async deleteLanguage(id: number): Promise<Language>{
        return this.prisma.language.delete({
            where:{
                id
            }
        });
    }
    
}