import {Injectable} from "@nestjs/common";
import { ProfessionalReferences } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ProfessionalReferencesService{
    constructor(private prisma: PrismaService){}

    async getAllProfessionalReferences(): Promise<ProfessionalReferences[]>{
        return this.prisma.professionalReferences.findMany();
    }

    async getProfessionalReferencesById(id: number): Promise<ProfessionalReferences[]>{
        return this.prisma.professionalReferences.findMany({
            where:{
                idSubscription:id
            }
        });
    }

    async createProfessionalReferences(data: ProfessionalReferences): Promise<ProfessionalReferences>{
        data.registrationDate = new Date();
        return this.prisma.professionalReferences.create({
                data
        });
    }

    async updateProfessionalReferences(id: number, data: ProfessionalReferences): Promise<ProfessionalReferences>{
        return this.prisma.professionalReferences.update({
            where:{
                id
            },
            data
        })
    }
    async deleteProfessionalReferences(id: number): Promise<ProfessionalReferences>{
        return this.prisma.professionalReferences.delete({
            where:{
                id
            }
        });
    }
    
}