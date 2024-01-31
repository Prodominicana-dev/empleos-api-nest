import {Controller,Get,Param,Res} from "@nestjs/common";
import { ShowImgService } from "./ShowImg.service";
import { createReadStream } from "fs";
import * as fs from 'fs';
import { join } from 'path';
import { Response } from 'express';


@Controller()
export class ShowImgController{
    constructor(private readonly ShowImgService:ShowImgService){}


    @Get('MostrarImg/:idSubscription')
    async getNameImg(@Param('idSubscription') idSubscription:string){
       return await this.ShowImgService.getNameImg(Number(idSubscription));
    }

     
    // @Get('VerImg/:name')
    // async getImg(@Param('name') name:string, @Res() res: Response ) {
    //     const file = createReadStream(join(process.cwd(),'./uploadImg/', name));
    //     res.setHeader('Content-Disposition', 'inline');
    //     res.setHeader('Content-Type', 'image/*');
    //     file.pipe(res);

    // }  
    @Get('VerImg/:name')
  async getImg(@Param('name') name: string, @Res() res: Response) {
    const imagePath = join(process.cwd(), './uploadimg/', name); // Ruta completa del archivo de imagen

    // Verificar si el archivo existe
    try {
      const stats = await fs.promises.stat(imagePath);
      if (!stats.isFile()) {
        throw new Error('El archivo no existe');
      }
    } catch (error) {
      // Manejar el error si el archivo no existe
      console.error(error);
      return res.status(404).send('Archivo no encontrado');
    }

    // Configurar encabezados de respuesta
    res.setHeader('Content-Disposition', 'inline');
    res.setHeader('Content-Type', 'image/jpeg'); // Por ejemplo, ajusta el tipo de imagen según tu caso

    // Transmitir el archivo de imagen al cliente
    const imageStream = createReadStream(imagePath);
    imageStream.pipe(res);
  }
}