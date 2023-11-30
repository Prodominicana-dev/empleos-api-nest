import { Injectable } from "@nestjs/common";
import { vacantes } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class VacantesService{
    constructor(private prisma: PrismaService){}

    async getAllVacante(): Promise<vacantes[]>{
        return this.prisma.vacantes.findMany();
    }

    async getVacanteById(id: number): Promise<vacantes>{
        return this.prisma.vacantes.findUnique({
            where:{
                id
            }
        });
    }

    async getVacanteIdCategoria(idcategoria: number):Promise<vacantes[]>{
        return this.prisma.vacantes.findMany({
            where:{
                idcategoria
            }
        })
    }

    async createVacante(data: vacantes): Promise<vacantes>{
        return this.prisma.vacantes.create({
                data
        });
    }

    async updateVacantes(id: number, data: vacantes): Promise<vacantes>{
        return this.prisma.vacantes.update({
            where:{
                id
            },
            data
        })
    }
    async deleteVacantes(id: number): Promise<vacantes>{
        return this.prisma.vacantes.delete({
            where:{
                id
            }
        });
    }
    
}