import {Injectable} from "@nestjs/common";
import { periodo } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class PeriodoService{
    constructor(private prisma: PrismaService){}

    async getAllPeriodo(): Promise<periodo[]>{
        return this.prisma.periodo.findMany();
    }

    async getPeriodoById(id: number): Promise<periodo>{
        return this.prisma.periodo.findUnique({
            where:{
                id
            }
        });
    }

    async createPeriodo(data: periodo): Promise<periodo>{
        return this.prisma.periodo.create({
                data
        });
    }

    async updatePeriodos(id: number, data: periodo): Promise<periodo>{
        return this.prisma.periodo.update({
            where:{
                id
            },
            data
        })
    }
    async deletePeriodos(id: number): Promise<periodo>{
        return this.prisma.periodo.delete({
            where:{
                id
            }
        });
    }
    
}