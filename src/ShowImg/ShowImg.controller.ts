import {Controller,Get,Param,Header} from "@nestjs/common";
import { ShowImgService } from "./ShowImg.service";



@Controller()
export class ShowImgController{
    constructor(private readonly ShowImgService:ShowImgService){}


    @Get('MostrarImg/:idSubscription')
    async getNamePDF(@Param('idSubscription') idSubscription:string){
       return await this.ShowImgService.getNameImg(Number(idSubscription));
    }

     
    @Get('VerImg/:name')
    @Header('Content-Type', 'image/png, image/jpeg')
    @Header('Content-Disposition', 'inline')
    async getPDF(@Param('name') name:string) {
       
  

        
        return this.ShowImgService.getImg(name);

    }  
}