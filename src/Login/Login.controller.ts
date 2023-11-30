import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException} from "@nestjs/common";
import { LoginService } from "./Login.service";


@Controller()
export class LoginController {

    constructor(private readonly LoginService:LoginService){}

    @Post('login')
    async Login(@Body() data:any){

        return this.LoginService.Login(data);

    }


    @Post('loginUsuario')
    async LoginUsuario(@Body() data:any){

        return this.LoginService.LoginUsuario(data);

    }

}