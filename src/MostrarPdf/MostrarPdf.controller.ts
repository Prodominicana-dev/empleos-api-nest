import {Controller,Get,Param,Header} from "@nestjs/common";
import { MostrarPDFService } from "./MostrarPdf.service";


@Controller()
export class MostrarPDFController{
    constructor(private readonly MostrarPDFService:MostrarPDFService){}


    @Get('MostrarPdf/:idSuscripcion')
    async getPDFs(@Param('idSuscripcion') idSuscripcion:string){
       return await this.MostrarPDFService.getPDFs(Number(idSuscripcion));
    }


    @Get('VerPdf/:nombre')
    @Header('Content-Type', 'application/pdf')
    @Header('Content-Disposition', 'attachment;')
    async VerPDFs(@Param('nombre') nombre:string) {
        return this.MostrarPDFService.VerPDFs(nombre);

    }
}