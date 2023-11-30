import {Injectable} from "@nestjs/common";
import { experiencialaboralexterna } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ExperienciaLaboralService{
    constructor(private prisma: PrismaService){}

    async getAllExLa(): Promise<experiencialaboralexterna[]>{
        return this.prisma.experiencialaboralexterna.findMany();
    }

    async getExLaById(id: number): Promise<experiencialaboralexterna>{
        return this.prisma.experiencialaboralexterna.findUnique({
            where:{
                id
            }
        });
    }

    async createExLa(data: experiencialaboralexterna): Promise<experiencialaboralexterna>{
        return this.prisma.experiencialaboralexterna.create({
                data
        });
    }

    async updateExLas(id: number, data: experiencialaboralexterna): Promise<experiencialaboralexterna>{
        return this.prisma.experiencialaboralexterna.update({
            where:{
                id
            },
            data
        })
    }
    async deleteExLas(id: number): Promise<experiencialaboralexterna>{
        return this.prisma.experiencialaboralexterna.delete({
            where:{
                id
            }
        });
    }
    
}