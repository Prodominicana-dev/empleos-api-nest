import {Injectable} from "@nestjs/common";
import { informeperfil } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class InformePerfilService{
    constructor(private prisma: PrismaService){}

    async getAllInfPer(): Promise<informeperfil[]>{
        return this.prisma.informeperfil.findMany();
    }

    async getInfPerById(id: number): Promise<informeperfil>{
        return this.prisma.informeperfil.findUnique({
            where:{
                id
            }
        });
    }

    async createInfPer(data: informeperfil): Promise<informeperfil>{
        return this.prisma.informeperfil.create({
                data
        });
    }

    async updateInfPers(id: number, data: informeperfil): Promise<informeperfil>{
        return this.prisma.informeperfil.update({
            where:{
                id
            },
            data
        })
    }
    async deleteInfPers(id: number): Promise<informeperfil>{
        return this.prisma.informeperfil.delete({
            where:{
                id
            }
        });
    }
    
}