import { NestFactory } from '@nestjs/core'; //Lib principal do nestjs
import { AppModule } from './app.module';


//bootstrap da aplicação, módulo principal
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
}

bootstrap();
