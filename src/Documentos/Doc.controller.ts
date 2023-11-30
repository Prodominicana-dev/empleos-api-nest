import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException, UploadedFile, UseInterceptors} from "@nestjs/common";
import { DocumentoService } from "./Doc.service";
import { documentos } from "@prisma/client";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";

@Controller('Curriculum')
export class DocumentoController {

    constructor(private readonly DocumentoService:DocumentoService){}

    
    @Get()
    async getAllDoc() {
        return await this.DocumentoService.getAllDoc()
    }

    //Documento..........
    @UseInterceptors(
        FileInterceptor(
            'archivo',
            {
                storage : diskStorage({
                    destination:'./uploads',
                    filename: function(req, file, cb){
                        cb(null, file.originalname + '_' + Date.now() + '.pdf');
                    }
                })
            }
        )
    )
    @Post()
    async createDoc(@UploadedFile() file: Express.Multer.File ,@Body() data: documentos) {

        data.nombre = file.filename;
        data.size = String(file.size);
        data.fechacreacion = null;
        data.fecharegistro = new Date();
        const doc = await this.DocumentoService.createDoc(data);

        return {
            doc,
            msg:`Archivo ${file.filename}cargado correctamente` 
        }

    }

    @Get(':id')
    async getDocById(@Param('id') id:string){
        const DocFound = await this.DocumentoService.getDocById(Number(id))
        if(!DocFound ) throw new NotFoundException('Doc does not exist')
        return DocFound 
    }

    @Delete(':id')
    async deleteDoc(@Param('id') id:string){
       try {
           return await this.DocumentoService.deleteDocs(Number(id))
       } catch (error) {
           throw new NotFoundException('Doc does not exist')
       }
    }

    @Put(':id')
    async updateDoc(@Param('id') id: string, @Body() data: documentos){
       try {
           return await this.DocumentoService.updateDocs(Number(id), data)
       } catch (error) {
           throw new NotFoundException('Doc does not exist')
       }
    }

    //Archivos.......
 
    // @Post('file')
    // uploadFile(@UploadedFile() file: Express.Multer.File){
    //     return{


    //        //msg:`Archivo ${file.filename} ${file.}cargado correctamente` 
    //     }
    // }
}