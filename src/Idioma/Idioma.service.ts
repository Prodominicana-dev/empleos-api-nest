import {Injectable} from "@nestjs/common";
import { idioma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class IdiomaService{
    constructor(private prisma: PrismaService){}

    async getAllIdioma(): Promise<idioma[]>{
        return this.prisma.idioma.findMany();
    }

    async getIdiomaById(id: number): Promise<idioma>{
        return this.prisma.idioma.findUnique({
            where:{
                id
            }
        });
    }

    async createIdioma(data: idioma): Promise<idioma>{
        return this.prisma.idioma.create({
                data
        });
    }

    async updateIdiomas(id: number, data: idioma): Promise<idioma>{
        return this.prisma.idioma.update({
            where:{
                id
            },
            data
        })
    }
    async deleteIdiomas(id: number): Promise<idioma>{
        return this.prisma.idioma.delete({
            where:{
                id
            }
        });
    }
    
}