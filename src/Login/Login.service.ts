import {Injectable} from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import * as bcrypt from "bcrypt";

@Injectable()
export class LoginService{

    constructor(private prisma: PrismaService){}


    async Login(data:any):Promise<any>{

            try{

                    const {Email,password} = data;

                    const result = await this.prisma.suscripcion.findMany({
                        where:{
                            email:Email
                        }
                    });

                    const hashPass = result[0].password;
                    const compare = bcrypt.compareSync(password,hashPass)

                    if(compare){

                        const token =
                        {
                        "Id":result[0].id,
                        "Nombre":result[0].nombre,
                        "Movil":result[0].movil,
                        "Email":result[0].email,
                        }

                        return token;
                    }

                return "Suscriptor no Existe";



            }catch (error) {

                return error;

            }
    }


    async LoginUsuario(data:any):Promise<any>{

        try{

                const {Correo,password} = data;
                
                const result = await this.prisma.usuario.findMany({
                    where:{
                        correo:Correo
                    }
                });

                const hashPass = result[0].password;
                const compare = bcrypt.compareSync(password,hashPass)

                if(compare){

                        const token =
                        {
                        "Id":result[0].id,
                        "NombreCompleto":result[0].nombrecompleto,
                        "Correo":result[0].correo,
                        }
                    
                        return token;
                }

                return "Usuario no Existe";

        }catch (error) {

            return error;

        }
    }

}