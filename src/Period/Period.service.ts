import {Injectable} from "@nestjs/common";
import { Period } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class PeriodService{
    constructor(private prisma: PrismaService){}

    async getAllPeriod(): Promise<Period[]>{
        return this.prisma.period.findMany();
    }

    async getAllPeriodByIdJobOpening(idJobOpening: number): Promise<Period[]>{
        return this.prisma.period.findMany({
            where:{
                idJobOpening
            }
        });
    }

    async createPeriod(data: Period): Promise<Period>{
        data.registrationDate = new Date();
        return await this.prisma.period.create({
                data
        });
    }

    async updatePeriod(id: number, data: Period): Promise<Period>{
        return this.prisma.period.update({
            where:{
                id
            },
            data
        })
    }
    async deletePeriod(id: number): Promise<Period>{
        return this.prisma.period.delete({
            where:{
                id
            }
        });
    }
    
}