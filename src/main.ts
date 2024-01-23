import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {


  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    methods: ['GET','HEAD','PUT','PATCH','POST','DELETE'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'Authorization'],
    credentials: true,
  });


  // const app = await NestFactory.create(AppModule, { cors: {

  //   origin: true,
  //   methods: ['GET','HEAD','PUT','PATCH','POST','DELETE'],
  //   credentials: true,
  //   allowedHeaders: 'Content-Type, Authorization',


  // } });
  
  



  await app.listen(3001);
}
bootstrap();
