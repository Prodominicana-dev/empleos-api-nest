import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException} from "@nestjs/common";
import { UserService } from "./User.service";
import { User } from "@prisma/client";


@Controller('User')
export class UserController {

    constructor(private readonly UserService:UserService){}

    
    @Get()
    async getAllUser() {
        return await this.UserService.getAllUser()
    }

    @Post()
    async createUser(@Body() data: User) {
        return await this.UserService.createUser(data)
    }

    @Get(':id')
    async getUserById(@Param('id') id:string){
        const UserFound = await this.UserService.getUserById(Number(id))
        if(!UserFound ) throw new NotFoundException('User does not exist')
        return UserFound 
    }

    @Delete(':id')
    async deleteUser(@Param('id') id:string){
       try {
           return await this.UserService.deleteUser(Number(id))
       } catch (error) {
           throw new NotFoundException('User does not exist')
       }
    }

    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() data: User){
       try {
           return await this.UserService.updateUser(Number(id), data)
       } catch (error) {
           throw new NotFoundException('User does not exist')
       }
    }

    
}