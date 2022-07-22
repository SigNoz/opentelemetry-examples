const tracer = require('./tracer'); // important to initialize the SDK before starting the application
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  await tracer.start();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
