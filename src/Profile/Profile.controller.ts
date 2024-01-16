import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException} from "@nestjs/common";
import { ProfileService } from "./Profile.service";
import { Profile } from "@prisma/client";


@Controller('Profile')
export class ProfileController {

    constructor(private readonly ProfileService:ProfileService){}

    
    @Get()
    async getAllProfile() {
        return await this.ProfileService.getAllProfile()
    }

    @Post()
    async createProfile(@Body() data: Profile) {
        return await this.ProfileService.createProfile(data)
    }

    @Get(':id')
    async getProfileById(@Param('id') id:string){
        const ProfileFound = await this.ProfileService.getProfileById(Number(id))
        if(!ProfileFound ) throw new NotFoundException('Profile does not exist')
        return ProfileFound 
    }

    @Delete(':id')
    async deleteProfile(@Param('id') id:string){
       try {
           return await this.ProfileService.deleteProfile(Number(id))
       } catch (error) {
           throw new NotFoundException('Profile does not exist')
       }
    }

    @Put(':id')
    async updateProfile(@Param('id') id: string, @Body() data: Profile){
       try {
           return await this.ProfileService.updateProfile(Number(id), data)
       } catch (error) {
           throw new NotFoundException('Profile does not exist')
       }
    }

    
}