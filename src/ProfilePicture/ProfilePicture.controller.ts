import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException, UploadedFile, UseInterceptors} from "@nestjs/common";
import { ProfilePictureService } from "./ProfilePicture.service";
import { ProfilePicture } from "@prisma/client";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";

@Controller('Imagen')
export class ProfilePictureController {

    constructor(private readonly ProfilePictureService:ProfilePictureService){}

    
    @Get()
    async getAllProfilePicture() {
        return await this.ProfilePictureService.getAllProfilePicture()
    }

    //Image..............
    @UseInterceptors(
        FileInterceptor(
            'imagen',
            {
                storage : diskStorage({
                    destination:'./uploadimg',
                    filename: function(req, file, cb){
                        cb(null, Date.now() + '_' + file.originalname);
                    } 
                })
            }
        ) 
    )
    @Post()
    async createProfilePicture(@UploadedFile() file: Express.Multer.File, @Body() data: ProfilePicture) {
        data.idSubscription = Number(data.idSubscription);
        data.name = file.filename;
        data.registrationDate = new Date();
        const img = await this.ProfilePictureService.createProfilePicture(data)

        return {
            img,
            msg:`Profile picture ${file.filename} loaded successfully`
        }
    }

    @Get(':id')
    async getProfilePictureById(@Param('id') id:string){
        const ProfilePictureFound = await this.ProfilePictureService.getProfilePictureById(Number(id))
        if(!ProfilePictureFound ) throw new NotFoundException('Profile picture does not exist')
        return ProfilePictureFound 
    }

    @Delete(':id')
    async deleteProfilePicture(@Param('id') id:string){
       try {
           return await this.ProfilePictureService.deleteProfilePicture(Number(id))
       } catch (error) {
           throw new NotFoundException('Profile picture does not exist')
       }
    }

    @Put(':id')
    async updateProfilePicture(@Param('id') id: string, @Body() data: ProfilePicture){
       try {
           return await this.ProfilePictureService.updateProfilePicture(Number(id), data)
       } catch (error) {
           throw new NotFoundException('Profile picture does not exist')
       }
    }
  
  
}