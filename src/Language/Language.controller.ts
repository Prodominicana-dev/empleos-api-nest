import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException} from "@nestjs/common";
import { LanguageService } from "./Language.service";
import { Language } from "@prisma/client";


@Controller('Language')
export class LanguageController {

    constructor(private readonly LanguageService:LanguageService){}

    
    @Get()
    async getAllLanguage() {
        return await this.LanguageService.getAllLanguage()
    }

    @Post()
    async createLanguage(@Body() data: Language) {
        return await this.LanguageService.createLanguage(data)
    }

    @Get(':id')
    async getLanguageById(@Param('id') id:string){
        const LanguageFound = await this.LanguageService.getLanguageById(Number(id))
        if(!LanguageFound ) throw new NotFoundException('Language does not exist')
        return LanguageFound 
    }

    @Delete(':id')
    async deleteLanguage(@Param('id') id:string){
       try {
           return await this.LanguageService.deleteLanguage(Number(id))
       } catch (error) {
           throw new NotFoundException('Language does not exist')
       }
    }

    @Put(':id')
    async updateLanguage(@Param('id') id: string, @Body() data: Language){
       try {
           return await this.LanguageService.updateLanguage(Number(id), data)
       } catch (error) {
           throw new NotFoundException('Language does not exist')
       }
    }

    
}