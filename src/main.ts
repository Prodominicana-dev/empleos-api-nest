import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {

  const app = await NestFactory.create(AppModule, { cors: {
    origin: ['https://empleos.prodominicana.gob.do','http://localhost:3000','http://localhost:3002'],
    methods: ['GET','HEAD','PUT','PATCH','POST','DELETE'],
    credentials: true,
    allowedHeaders: 'Content-Type, Authorization',
  }});

  await app.listen(3003);
}
bootstrap();
