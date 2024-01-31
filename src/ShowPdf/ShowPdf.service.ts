import {Injectable,StreamableFile} from "@nestjs/common";
import { Document } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { createReadStream } from "fs";
import { join } from 'path';
import { Response } from 'express';
@Injectable()
export class ShowPDFService{

    constructor(private prisma: PrismaService){}


    async getNamePDF(idSubscription: number): Promise<Document[]>{
        return this.prisma.document.findMany({
            where:{
                idSubscription
            }
        });
    }

   
    // async getPDF(name: string, res:Response){

    //     const file = createReadStream(join(process.cwd(),'./uploadDocument/', name));
    //     res.setHeader('Content-Disposition', `attachment; filename="${name}"`);
    //     res.setHeader('Content-Type', 'application/pdf');


    //     file.pipe(res);

    // }

}
