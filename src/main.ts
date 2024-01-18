import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule, { cors: {
  //   origin: ['https://empleosadmin.prodominicana.gob.do','https://empleos.prodominicana.gob.do'],
  //   methods: ['GET','HEAD','PUT','PATCH','POST','DELETE'],
  //   credentials: true
  // } });
  // const app = await NestFactory.create(AppModule);

  // const corsOptions: CorsOptions = {
  //   origin: '*',
  //   methods: ['GET','HEAD','PUT','PATCH','POST','DELETE'],
  //   credentials: true,
  // };

  // app.enableCors(corsOptions);
  const app = await NestFactory.create(AppModule);

  // Configurar CORS para permitir cualquier origen
  app.enableCors({
    origin: '*',
    methods: ['GET','HEAD','PUT','PATCH','POST','DELETE'],
    credentials: true,
  });



  await app.listen(3001);
}
bootstrap();
