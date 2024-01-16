import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException} from "@nestjs/common";
import { ProfessionalReferencesService } from "./ProfessionalReferences.service";
import { ProfessionalReferences } from "@prisma/client";


@Controller('ProfessionalReferences')
export class ProfessionalReferencesController {

    constructor(private readonly ProfessionalReferencesService:ProfessionalReferencesService){}

    
    @Get()
    async getAllProfessionalReferences() {
        return await this.ProfessionalReferencesService.getAllProfessionalReferences()
    }

    @Post()
    async createProfessionalReferences(@Body() data: ProfessionalReferences) {
        return await this.ProfessionalReferencesService.createProfessionalReferences(data)
    }

    @Get(':id')
    async getProfessionalReferencesById(@Param('id') id:string){
        const ProfessionalReferencesFound = await this.ProfessionalReferencesService.getProfessionalReferencesById(Number(id))
        if(!ProfessionalReferencesFound ) throw new NotFoundException('Professional references does not exist')
        return ProfessionalReferencesFound 
    }
 
    @Delete(':id')
    async deleteProfessionalReferences(@Param('id') id:string){
       try {
           return await this.ProfessionalReferencesService.deleteProfessionalReferences(Number(id))
       } catch (error) {
           throw new NotFoundException('Professional references does not exist')
       }
    }

    @Put(':id')
    async updateProfessionalReferences(@Param('id') id: string, @Body() data: ProfessionalReferences){
       try {
           return await this.ProfessionalReferencesService.updateProfessionalReferences(Number(id), data)
       } catch (error) {
           throw new NotFoundException('Professional references does not exist')
       }
    }

    
}