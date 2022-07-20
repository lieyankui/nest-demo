import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      // 如果设置为true, validator 将删除已验证对象中没有任何装饰器的所有属性（如果要接受一个实体类上的所有属性，则所有属性上都应该有装饰器）
      whitelist: true,
    }),
  );

  await app.listen(3000);
}

bootstrap();
