import { ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './common/filters/global-exception.filter';
import { setupSwagger } from './swagger';
import { getEnvConfig } from './utils';

const server_port = getEnvConfig('server_port') || 3000;
const server_prefix = getEnvConfig('server_prefix') || '';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix(server_prefix);
  // 设置 swagger 文档相关配置
  setupSwagger(app);
  // 设置全局管道
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      // 如果设置为true, validator 将删除已验证对象中没有任何装饰器的所有属性（如果要接受一个实体类上的所有属性，则所有属性上都应该有装饰器）
      whitelist: true,
    }),
  );
  // 全局使用winston
  const nestWinston = app.get('NestWinston');
  app.useLogger(nestWinston);
  // 使用全局过滤器
  const httpAdapter = app.get(HttpAdapterHost);
  // 全局异常过滤器
  app.useGlobalFilters(new GlobalExceptionFilter(httpAdapter, nestWinston.logger));

  await app.listen(server_port);
}

bootstrap();
