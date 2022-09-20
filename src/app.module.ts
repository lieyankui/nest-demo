import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CatsModule } from './cats/cat.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { DogsModule } from './dogs/dogs.module';
import MysqlConfig from './config/mysql.config';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { CorsMiddleware } from './middlewares/cors.middleware';
import { OriginMiddleware } from './middlewares/origin.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [MysqlConfig],
    }),
    // UserModule,
    CatsModule,
    // DatabaseModule,
    DogsModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // 添加路由中间件
    consumer
      .apply(LoggerMiddleware, CorsMiddleware, OriginMiddleware)
      .forRoutes("/");
  }
}
