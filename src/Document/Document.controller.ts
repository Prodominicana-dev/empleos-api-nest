import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException, UploadedFile, UseInterceptors} from "@nestjs/common";
import { DocumentService } from "./Document.service";
import { Document } from "@prisma/client";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";

@Controller('Document')
export class DocumentController {

    constructor(private readonly DocumentService:DocumentService){}

    
    @Get()
    async getAllDoc() {
        return await this.DocumentService.getAllDoc()
    }

    //Documento..........
    @UseInterceptors(
        FileInterceptor(
            'archivo',
            {
                storage : diskStorage({
                    destination:'./uploadDocument',
                    filename: function(req, file, cb){
                        cb(null, file.originalname + '_' + Date.now() + '.pdf');
                    }
                })
            }
        )
    )
    @Post()
    async createDoc(@UploadedFile() file: Express.Multer.File ,@Body() data: Document) {
        data.idSubscription = Number(data.idSubscription);
        data.name = file.filename;
        data.size = String(file.size);
        data.registrationDate = new Date();
        const doc = await this.DocumentService.createDoc(data);

        return {
            doc,
            msg:`File ${file.filename} loaded successfully` 
        }

    }

    @Get(':id')
    async getDocById(@Param('id') id:string){
        const DocFound = await this.DocumentService.getDocById(Number(id))
        if(!DocFound ) throw new NotFoundException('Doc does not exist')
        return DocFound 
    }

    @Delete(':id')
    async deleteDoc(@Param('id') id:string){
       try {
           return await this.DocumentService.deleteDoc(Number(id))
       } catch (error) {
           throw new NotFoundException('Doc does not exist')
       }
    }

    @Put(':id')
    async updateDoc(@Param('id') id: string, @Body() data: Document){
       try {
           return await this.DocumentService.updateDoc(Number(id), data)
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