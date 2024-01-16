import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException} from "@nestjs/common";
import { PersonalReferencesService } from "./PersonalReferences.service";
import { PersonalReferences } from "@prisma/client";


@Controller('PersonalReferences')
export class PersonalReferencesController {

    constructor(private readonly PersonalReferencesService:PersonalReferencesService){}

    
    @Get()
    async getAllPersonalReferences() {
        return await this.PersonalReferencesService.getAllPersonalReferences()
    }

    @Post()
    async createPersonalReferences(@Body() data: PersonalReferences) {
        return await this.PersonalReferencesService.createPersonalReferences(data)
    }

    @Get(':id')
    async getPersonalReferencesById(@Param('id') id:string){
        const PersonalReferencesFound = await this.PersonalReferencesService.getPersonalReferencesById(Number(id))
        if(!PersonalReferencesFound ) throw new NotFoundException('Personal references does not exist')
        return PersonalReferencesFound 
    }

    @Delete(':id')
    async deletePersonalReferences(@Param('id') id:string){
       try {
           return await this.PersonalReferencesService.deletePersonalReferences(Number(id))
       } catch (error) {
           throw new NotFoundException('Personal references does not exist')
       }
    }

    @Put(':id')
    async updatePersonalReferences(@Param('id') id: string, @Body() data: PersonalReferences){
       try {
           return await this.PersonalReferencesService.updatePersonalReferences(Number(id), data)
       } catch (error) {
           throw new NotFoundException('Personal references does not exist')
       }
    }

    
}