import {Injectable} from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import * as bcrypt from "bcrypt";

@Injectable()
export class LoginService{

    constructor(private prisma: PrismaService){}


    async Login(data:any):Promise<any>{

            try{

                    const {email,password} = data;

                    const result = await this.prisma.subscription.findMany({
                        where:{
                            email
                        }
                    });

                    const hashPass = result[0].password;
                    const compare = bcrypt.compareSync(password,hashPass)

                    if(compare){

                        const token =
                        {
                        "Id":result[0].id,
                        "Name":result[0].name,
                        "Email":result[0].email,
                        }

                        return token;
                    }

                return "Subscriber does not exist.";



            }catch (error) {

                return error;

            }
    }


    async LoginUser(data:any):Promise<any>{

        try{

                const {email,password} = data;
                
                const result = await this.prisma.user.findMany({
                    where:{
                        email
                    }
                });

                const hashPass = result[0].password;
                const compare = bcrypt.compareSync(password,hashPass)

                if(compare){

                        const token =
                        {
                        "Id":result[0].id,
                        "FullName":result[0].fullName,
                        "Email":result[0].email,
                        }
                    
                        return token;
                }

                return "User does not exist.";

        }catch (error) {

            return error;

        }
    }

}