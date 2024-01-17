import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['https://empleosapi.prodominicana.gob.do','https://empleosapi.prodominicana.gob.do'], // Reemplaza esto con tu dominio frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Habilita el intercambio de credenciales (si es necesario)
  });
  await app.listen(3000);
}
bootstrap();
