import {Injectable} from "@nestjs/common";
import { referenciaslaborales } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ReferenciasLaboralesService{
    constructor(private prisma: PrismaService){}

    async getAllRefLab(): Promise<referenciaslaborales[]>{
        return this.prisma.referenciaslaborales.findMany();
    }

    async getRefLabById(id: number): Promise<referenciaslaborales>{
        return this.prisma.referenciaslaborales.findUnique({
            where:{
                id
            }
        });
    }

    async createRefLab(data: referenciaslaborales): Promise<referenciaslaborales>{
        return this.prisma.referenciaslaborales.create({
                data
        });
    }

    async updateRefLabs(id: number, data: referenciaslaborales): Promise<referenciaslaborales>{
        return this.prisma.referenciaslaborales.update({
            where:{
                id
            },
            data
        })
    }
    async deleteRefLabs(id: number): Promise<referenciaslaborales>{
        return this.prisma.referenciaslaborales.delete({
            where:{
                id
            }
        });
    }
    
}