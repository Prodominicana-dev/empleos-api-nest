import {Injectable} from "@nestjs/common";
import { Document } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class DocumentService{
    constructor(private prisma: PrismaService){}

    async getAllDoc(): Promise<Document[]>{
        return this.prisma.document.findMany();
    }

    async getDocById(id: number): Promise<Document[]>{
        return this.prisma.document.findMany({
            where:{
                idSubscription:id
            }
        });
    }

    async createDoc(data: Document): Promise<Document>{
        return await this.prisma.document.create({ data });

        
    }

    async updateDoc(id: number, data: Document): Promise<Document>{
        return this.prisma.document.update({
            where:{
                id
            },
            data
        })
    }
    async deleteDoc(id: number): Promise<Document>{
        return this.prisma.document.delete({
            where:{
                id
            }
        });
    }
    
}