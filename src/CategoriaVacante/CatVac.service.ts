import {Injectable} from "@nestjs/common";
import { categoriavacantes } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CategoriaVacantesService{
    constructor(private prisma: PrismaService){}

    async getAllCatVac(): Promise<categoriavacantes[]>{
        return this.prisma.categoriavacantes.findMany();
    }

    async getCatVacById(id: number): Promise<categoriavacantes>{
        return this.prisma.categoriavacantes.findUnique({
            where:{
                id
            }
        });
    }

    async createCatVac(data: categoriavacantes): Promise<categoriavacantes>{
        try
        {

            data.fecharegistro = new Date();
            return await this.prisma.categoriavacantes.create({data});
            
        }
            catch(error)
        {
            return error;
        }
    }

    async updateCatVacs(id: number, data: categoriavacantes): Promise<categoriavacantes>{
        return this.prisma.categoriavacantes.update({
            where:{
                id
            },
            data
        })
    }
    async deleteCatVacs(id: number): Promise<categoriavacantes>{
        return this.prisma.categoriavacantes.delete({
            where:{
                id
            }
        });
    }
    
}