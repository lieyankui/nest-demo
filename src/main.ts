import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 设置 swagger 文档相关配置
  const swaggerOptions = new DocumentBuilder()
    .setTitle('nest-demo api document')
    .setDescription('nest-demo api document')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('doc', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      // 如果设置为true, validator 将删除已验证对象中没有任何装饰器的所有属性（如果要接受一个实体类上的所有属性，则所有属性上都应该有装饰器）
      whitelist: true,
    }),
  );
  // 使用日志中间件
  app.use(LoggerMiddleware); // 不能用类，只能用方法

  await app.listen(3000);
}

bootstrap();
