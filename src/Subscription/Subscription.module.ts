import { Module } from "@nestjs/common";
import { SubscriptionController} from "./Subscription.controller";
import { SubscriptionService } from "./Subscription.service";
import { EmailService } from "src/Email/Email.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[SubscriptionController],
    providers:[SubscriptionService,EmailService],
    imports:[PrismaModule]
})
export class SubscriptionModule {}