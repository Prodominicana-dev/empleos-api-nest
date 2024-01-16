import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException} from "@nestjs/common";
import { ProfileParticularsService } from "./ProfileParticulars.service";
import { ProfileParticulars } from "@prisma/client";


@Controller('ProfileParticulars')
export class ProfileParticularsController {

    constructor(private readonly ProfileParticularsService:ProfileParticularsService){}

    
    @Get()
    async getAllProfileParticulars() {
        return await this.ProfileParticularsService.getAllProfileParticulars()
    }

    @Post()
    async createProfileParticulars(@Body() data: ProfileParticulars) {
        return await this.ProfileParticularsService.createProfileParticulars(data)
    }

    @Get(':id')
    async getProfileParticularsById(@Param('id') id:string){
        const ProfileFound = await this.ProfileParticularsService.getProfileParticularsById(Number(id))
        if(!ProfileFound ) throw new NotFoundException('Profile Particulars does not exist')
        return ProfileFound 
    }

    @Delete(':id')
    async deleteProfileParticulars(@Param('id') id:string){
       try {
           return await this.ProfileParticularsService.deleteProfileParticulars(Number(id))
       } catch (error) {
           throw new NotFoundException('Profile Particulars does not exist')
       }
    }

    @Put(':id')
    async updaProfileParticulars(@Param('id') id: string, @Body() data: ProfileParticulars){
       try {
           return await this.ProfileParticularsService.updateProfileParticulars(Number(id), data)
       } catch (error) {
           throw new NotFoundException('Profile Particulars does not exist')
       }
    }

    
}