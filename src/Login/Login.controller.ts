import {Controller,Post,Body} from "@nestjs/common";
import { LoginService } from "./Login.service";


@Controller()
export class LoginController {

    constructor(private readonly LoginService:LoginService){}

    @Post('login')
    async Login(@Body() data:any){

        return this.LoginService.Login(data);

    }


    @Post('loginUser')
    async LoginUser(@Body() data:any){

        return this.LoginService.LoginUser(data);

    }

}