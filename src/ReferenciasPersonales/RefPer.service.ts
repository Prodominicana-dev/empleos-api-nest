import {Injectable} from "@nestjs/common";
import { referenciaspersonales } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ReferenciasPersonalesService{
    constructor(private prisma: PrismaService){}

    async getAllRefPer(): Promise<referenciaspersonales[]>{
        return this.prisma.referenciaspersonales.findMany();
    }

    async getRefPerById(id: number): Promise<referenciaspersonales>{
        return this.prisma.referenciaspersonales.findUnique({
            where:{
                id
            }
        });
    }

    async createRefPer(data: referenciaspersonales): Promise<referenciaspersonales>{
        return this.prisma.referenciaspersonales.create({
                data
        });
    }

    async updateRefPers(id: number, data: referenciaspersonales): Promise<referenciaspersonales>{
        return this.prisma.referenciaspersonales.update({
            where:{
                id
            },
            data
        })
    }
    async deleteRefPers(id: number): Promise<referenciaspersonales>{
        return this.prisma.referenciaspersonales.delete({
            where:{
                id
            }
        });
    }
    
}