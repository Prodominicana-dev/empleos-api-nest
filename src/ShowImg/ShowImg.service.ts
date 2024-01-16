import {Injectable,StreamableFile} from "@nestjs/common";
import { ProfilePicture } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { createReadStream } from "fs";
import { join } from 'path';
@Injectable()
export class ShowImgService{

    constructor(private prisma: PrismaService){}


    async getNameImg(idSubscription: number): Promise<ProfilePicture[]>{
        return this.prisma.profilePicture.findMany({
            where:{
                idSubscription
            }
        });
    }

   
    async getImg(name: string ):Promise<StreamableFile> {

        const img = createReadStream(join(process.cwd(),'./uploadImg/', name));
        return new StreamableFile(img);

    }

}