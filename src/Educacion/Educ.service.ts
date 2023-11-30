import {Injectable} from "@nestjs/common";
import { educacion } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class EducacionService{
    constructor(private prisma: PrismaService){}

    async getAllEduc(): Promise<educacion[]>{
        return this.prisma.educacion.findMany();
    }

    async getEducById(id: number): Promise<educacion>{
        return this.prisma.educacion.findUnique({
            where:{
                id
            }
        });
    }

    async createEduc(data: educacion): Promise<educacion>{
        return this.prisma.educacion.create({
                data
        });
    }

    async updateEducs(id: number, data: educacion): Promise<educacion>{
        return this.prisma.educacion.update({
            where:{
                id
            },
            data
        })
    }
    async deleteEducs(id: number): Promise<educacion>{
        return this.prisma.educacion.delete({
            where:{
                id
            }
        });
    }
    
}