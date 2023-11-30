import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException} from "@nestjs/common";
import { UsuarioService } from "./Usuario.service";
import { usuario } from "@prisma/client";


@Controller('Usuario')
export class UsuarioController {

    constructor(private readonly UsuarioService:UsuarioService){}

    
    @Get()
    async getAllUsuario() {
        return await this.UsuarioService.getAllUsuario()
    }

    @Post()
    async createUsuario(@Body() data: usuario) {
        return await this.UsuarioService.createUsuario(data)
    }

    @Get(':id')
    async getUsuarioById(@Param('id') id:string){
        const UsuarioFound = await this.UsuarioService.getUsuarioById(Number(id))
        if(!UsuarioFound ) throw new NotFoundException('Usuario does not exist')
        return UsuarioFound 
    }

    @Delete(':id')
    async deleteUsuario(@Param('id') id:string){
       try {
           return await this.UsuarioService.deleteUsuarios(Number(id))
       } catch (error) {
           throw new NotFoundException('Usuario does not exist')
       }
    }

    @Put(':id')
    async updateVacante(@Param('id') id: string, @Body() data: usuario){
       try {
           return await this.UsuarioService.updateUsuarios(Number(id), data)
       } catch (error) {
           throw new NotFoundException('Usuario does not exist')
       }
    }

    
}