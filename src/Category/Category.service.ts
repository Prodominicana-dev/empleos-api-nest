import {Injectable} from "@nestjs/common";
import { Category } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CategoryService{
    constructor(private prisma: PrismaService){}

    async getAllCategory(): Promise<Category[]>{
        return this.prisma.category.findMany();
    }

    async getCategoryById(id: number): Promise<Category>{
       
        return await this.prisma.category.findUnique({
            where:{
                id
            }
        });
    }

   
    async createCategory(data: Category): Promise<Category>{
        try
        {
           
            data.registrationDate = new Date();
            console.log(data)
            return await this.prisma.category.create({data});
            
        }
            catch(error)
        {
            return error;
        }
    }

    async updateCategory(id: number, data: Category): Promise<Category>{
        return this.prisma.category.update({
            where:{
                id
            },
            data
        })
    }
    async deleteCategory(id: number): Promise<Category>{
        return this.prisma.category.delete({
            where:{
                id
            }
        });
    }
    
}