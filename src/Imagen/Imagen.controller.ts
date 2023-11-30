import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException, UploadedFile, UseInterceptors} from "@nestjs/common";
import { ImagenService } from "./Imagen.service";
import { imagenperf } from "@prisma/client";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";

@Controller('Imagen')
export class ImagenController {

    constructor(private readonly ImagenService:ImagenService){}

    
    @Get()
    async getAllImagen() {
        return await this.ImagenService.getAllImagen()
    }

    //Imagen..............
    @UseInterceptors(
        FileInterceptor(
            'imagen',
            {
                storage : diskStorage({
                    destination:'./img',
                    filename: function(req, file, cb){
                        cb(null, Date.now()+ '_' +file.originalname   );
                    }
                })
            }
        )
    )
    @Post()
    async createImagen(@UploadedFile() file: Express.Multer.File, @Body() data: imagenperf) {
        
        data.nombre = file.filename;
        data.fecharegistro = new Date();
        const img = await this.ImagenService.createImagen(data)

        return {
            img,
            msg:`Imagen ${file.filename} cargado correctamente`
        }
    }

    @Get(':id')
    async getImagenById(@Param('id') id:string){
        const ImagenFound = await this.ImagenService.getImagenById(Number(id))
        if(!ImagenFound ) throw new NotFoundException('Imagen does not exist')
        return ImagenFound 
    }

    @Delete(':id')
    async deleteImagen(@Param('id') id:string){
       try {
           return await this.ImagenService.deleteImagenes(Number(id))
       } catch (error) {
           throw new NotFoundException('Imagen does not exist')
       }
    }

    @Put(':id')
    async updateImagen(@Param('id') id: string, @Body() data: imagenperf){
       try {
           return await this.ImagenService.updateImagenes(Number(id), data)
       } catch (error) {
           throw new NotFoundException('imagen does not exist')
       }
    }
  
  
}