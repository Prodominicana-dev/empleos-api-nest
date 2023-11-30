import {Injectable} from "@nestjs/common";
import { usuariovacante } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class PuestoSolicitadoService{
    constructor(private prisma: PrismaService){}

    async getAllPuSo(): Promise<usuariovacante[]>{
        return this.prisma.usuariovacante.findMany();
    }

    async getAllIdVacantePuSo(): Promise<usuariovacante[]|null> {
        try {
            const result = await this.prisma.usuariovacante.findMany({
                include: {
                  suscripcion: {
                    select: {
                      id: true,
                      nombre: true,
                    },
                  },
                  vacantes: {
                    select: {
                      id: true,
                      nombrevacante: true,
                      fecharegistro: true,
                    },
                  },
                },
              });
            
              return result;
        } catch (error) {
            console.error(error); // Registra el error en la consola para obtener detalles
            return null;
          }
    }

    async getPuSoByIdSuscripcion(idsuscripcion: number): Promise<usuariovacante[]>{
        return this.prisma.usuariovacante.findMany({
            where:{
                idsuscripcion : idsuscripcion
            }
        });
    }


    async getPuSoIdVaIdSu(data:any): Promise<{ id: number } | null> {
        const {IdSuscripcion,IdVacante} = data;
        return this.prisma.usuariovacante.findFirst({
            where: {
                idsuscripcion: IdSuscripcion,
                idvacante: IdVacante
            },
            select: {
                id: true
            }
        });
    }

    async getPuSoById(id: number): Promise<usuariovacante>{
        return this.prisma.usuariovacante.findUnique({
            where:{
                id
            }
        });
    }

    async createPuSo(data: usuariovacante): Promise<usuariovacante>{
        return this.prisma.usuariovacante.create({
                data
        });
    }

    async deletePuSoByIdVacante(idvacante: number): Promise<usuariovacante[]> {
        try {
           // Obtener los registros a eliminar
        const registrosAEliminar = await this.prisma.usuariovacante.findMany({
            where: {
                idvacante: idvacante
            }
        });

        // Eliminar los registros obtenidos
        await this.prisma.usuariovacante.deleteMany({
            where: {
                idvacante: idvacante
            }
        });

        return registrosAEliminar; // Devuelve los registros eliminados
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    async updatePuSos(id: number, data: usuariovacante): Promise<usuariovacante>{
        return this.prisma.usuariovacante.update({
            where:{
                id
            },
            data
        })
    }
    async deletePuSos(id: number): Promise<usuariovacante>{
        return this.prisma.usuariovacante.delete({
            where:{
                id
            }
        });
    }
    
}