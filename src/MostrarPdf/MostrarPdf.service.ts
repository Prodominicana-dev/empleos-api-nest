import {Injectable,StreamableFile} from "@nestjs/common";
import { documentos } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { createReadStream } from "fs";
import { join } from 'path';

@Injectable()
export class MostrarPDFService{

    constructor(private prisma: PrismaService){}


    async getPDFs(idsuscripcion: number): Promise<documentos[]>{
        return this.prisma.documentos.findMany({
            where:{
                idsuscripcion
            }
        });
    }

   
    async VerPDFs(nombre: string ):Promise<StreamableFile> {

        const file = createReadStream(join(process.cwd(),'./uploads/' + nombre));
        return new StreamableFile(file);

    }

}
