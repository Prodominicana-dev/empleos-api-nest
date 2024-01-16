import {Injectable} from "@nestjs/common";
import { PositionAppliedFor,Subscription } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class PositionAppliedForService{
    constructor(private prisma: PrismaService){}

    async getAllPositionAppliedFor(): Promise<PositionAppliedFor[]>{
        return this.prisma.positionAppliedFor.findMany();
    }

    async getAllPositionAppliedForJoin(): Promise<PositionAppliedFor[]|null> {
        try {
            const result = await this.prisma.positionAppliedFor.findMany({
                include: {
                  subscription: {
                    select: {
                      id: true,
                      name: true,
                    },
                  },
                  jobOpening: {
                    select: {
                      id: true,
                      name: true,
                      registrationDate: true,
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
    
    async getPositionAppliedForByIdJobOpening(idJobOpening: number): Promise<PositionAppliedFor[]>{
        return this.prisma.positionAppliedFor.findMany({
            where:{
                idJobOpening
            }
        });
    }
    async getPositionAppliedForByIdSubscription(idSubscription: number): Promise<PositionAppliedFor[]>{
        return this.prisma.positionAppliedFor.findMany({
            where:{
                idSubscription
            }
        });
    }
    async getPositionAppliedForByIdJobOp(idJobOpening: number): Promise<Subscription[]>{
        return this.prisma.subscription.findMany({
            where: {
                positionAppliedFor: {
                  some: {
                    idJobOpening: {
                      equals: idJobOpening,
                    },
                    status: {
                      equals: 'None',
                    },
                  },
                },
              },
        });
    }


    async getPositionAppliedForByIdJobOpeningAndIdSubscription(data:any): Promise<PositionAppliedFor[] | null> {
        try{
                const {idSubscription,idJobOpening} = data;
                const positionAppliedFor = await this.prisma.positionAppliedFor.findMany({
                    where: {
                        idSubscription,
                        idJobOpening
                    },
                    select: {
                        id: true,
                        idJobOpening: true,
                        idSubscription: true,
                        status:true,
                        registrationDate: true
                    }
                });

                return positionAppliedFor;
    } catch (error) {
        console.error('Error al obtener respuestas', error);
        return null;
      }
    }

    async getPositionAppliedForById(id: number): Promise<PositionAppliedFor>{
        return this.prisma.positionAppliedFor.findUnique({
            where:{
                id
            }
        });
    }

    async createPositionAppliedFor(data: PositionAppliedFor): Promise<PositionAppliedFor>{
        data.status='None';
        data.registrationDate=new Date();
        return this.prisma.positionAppliedFor.create({
                data
        });
    }

    async deletePositionAppliedForByIdJobOpening(idJobOpening: number): Promise<PositionAppliedFor[]> {
        try {
           // Obtener los registros a eliminar
        const registrosAEliminar = await this.prisma.positionAppliedFor.findMany({
            where: {
                idJobOpening
            }
        });

        // Eliminar los registros obtenidos
        await this.prisma.positionAppliedFor.deleteMany({
            where: {
                idJobOpening
            }
        });

        return registrosAEliminar; // Devuelve los registros eliminados
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    async deletePositionAppliedFor(id: number): Promise<PositionAppliedFor>{
        return this.prisma.positionAppliedFor.delete({
            where:{
                id
            } 
        });
    }
    
    async updatePositionAppliedFor(id: number, data: PositionAppliedFor): Promise<PositionAppliedFor>{
        return this.prisma.positionAppliedFor.update({
            where:{
                id
            },
            data
        })
    }
}