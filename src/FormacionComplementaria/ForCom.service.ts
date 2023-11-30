import {Injectable} from "@nestjs/common";
import { formacioncomple } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class FormacionComplementariaService{
    constructor(private prisma: PrismaService){}

    async getAllForCom(): Promise<formacioncomple[]>{
        return this.prisma.formacioncomple.findMany();
    }

    async getForComById(id: number): Promise<formacioncomple>{
        return this.prisma.formacioncomple.findUnique({
            where:{
                id
            }
        });
    }

    async createForCom(data: formacioncomple): Promise<formacioncomple>{
        return this.prisma.formacioncomple.create({
                data
        });
    }

    async updateForComs(id: number, data: formacioncomple): Promise<formacioncomple>{
        return this.prisma.formacioncomple.update({
            where:{
                id
            },
            data
        })
    }
    async deleteForComs(id: number): Promise<formacioncomple>{
        return this.prisma.formacioncomple.delete({
            where:{
                id
            }
        });
    }
    
}