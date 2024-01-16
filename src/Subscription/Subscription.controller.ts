import {Controller,Get,Post,Put,Delete, Body, Param, NotFoundException} from "@nestjs/common";
import { SubscriptionService } from "./Subscription.service";
import { Subscription } from "@prisma/client";


@Controller('Subscription')
export class SubscriptionController {

    constructor(private readonly SubscriptionService:SubscriptionService){}

    
    @Get()
    async getAllSubscription() {
        return await this.SubscriptionService.getAllSubscription()
    }

    @Post()
    async createSubscription(@Body() data: Subscription) {
        return await this.SubscriptionService.createSubscription(data)
    }

    @Get(':id')
    async getSubscriptionById(@Param('id') id:string){
        const SubscriptionFound = await this.SubscriptionService.getSubscriptionById(Number(id))
        if(!SubscriptionFound ) throw new NotFoundException('Subscription does not exist')
        return SubscriptionFound 
    }

    @Delete(':id')
    async deleteSubscription(@Param('id') id:string){
       try {
           return await this.SubscriptionService.deleteSubscription(Number(id))
       } catch (error) {
           throw new NotFoundException('Subscription does not exist')
       }
    }

    @Put(':id')
    async updateSubscription(@Param('id') id: string, @Body() data: Subscription){
       try {
           return await this.SubscriptionService.updateSubscription(Number(id), data)
       } catch (error) {
           throw new NotFoundException('Subscription does not exist')
       }
    }

    
}