import {Injectable} from "@nestjs/common";
import { imagenperf } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ImagenService{
    constructor(private prisma: PrismaService){}

    async getAllImagen(): Promise<imagenperf[]>{
        return this.prisma.imagenperf.findMany();
    }

    async getImagenById(id: number): Promise<imagenperf>{
        return this.prisma.imagenperf.findUnique({
            where:{
                id
            }
        });
    }

    async createImagen(data: imagenperf): Promise<imagenperf>{
        return this.prisma.imagenperf.create({
                data
        });
    }

    async updateImagenes(id: number, data: imagenperf): Promise<imagenperf>{
        return this.prisma.imagenperf.update({
            where:{
                id
            },
            data
        })
    }
    async deleteImagenes(id: number): Promise<imagenperf>{
        return this.prisma.imagenperf.delete({
            where:{
                id
            }
        });
    }
    
}