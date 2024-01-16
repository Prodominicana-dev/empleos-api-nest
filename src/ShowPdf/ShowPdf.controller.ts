import {Controller,Get,Param,Header,Res} from "@nestjs/common";
import { createReadStream } from "fs";
import { join } from 'path';
import { Response } from 'express';
import { ShowPDFService } from "./ShowPdf.service";


@Controller()
export class ShowPDFController{
    constructor(private readonly ShowPDFService:ShowPDFService){}


    @Get('MostrarPdf/:idSubscription')
    async getNamePDF(@Param('idSubscription') idSubscription:string){
       return await this.ShowPDFService.getNamePDF(Number(idSubscription));
    }


    @Get('VerPdf/:name')
    async getPDF(@Param('name') name:string, @Res() res: Response  ) {
        const file = createReadStream(join(process.cwd(),'./uploadDocument/', name));
        res.setHeader('Content-Disposition', `attachment; filename=${name}`);
        res.setHeader('Content-Type', 'application/pdf');
        file.pipe(res);
    }
}