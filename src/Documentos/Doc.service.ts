import {Injectable} from "@nestjs/common";
import { documentos } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class DocumentoService{
    constructor(private prisma: PrismaService){}

    async getAllDoc(): Promise<documentos[]>{
        return this.prisma.documentos.findMany();
    }

    async getDocById(id: number): Promise<documentos>{
        return this.prisma.documentos.findUnique({
            where:{
                id
            }
        });
    }

    async createDoc(data: documentos): Promise<documentos>{
        return await this.prisma.documentos.create({ data });

        
    }

    async updateDocs(id: number, data: documentos): Promise<documentos>{
        return this.prisma.documentos.update({
            where:{
                id
            },
            data
        })
    }
    async deleteDocs(id: number): Promise<documentos>{
        return this.prisma.documentos.delete({
            where:{
                id
            }
        });
    }
    
}