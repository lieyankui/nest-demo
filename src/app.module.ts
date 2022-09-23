import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { CatsModule } from './modules/cats/cat.module';
import { DatabaseModule } from './common/modules/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { DogsModule } from './modules/dogs/dogs.module';
import MysqlConfig from './config/mysql.config';
import WinstonConfig from './config/winston.config';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { CorsMiddleware } from './common/middlewares/cors.middleware';
import { OriginMiddleware } from './common/middlewares/origin.middleware';
import { WinstonModule } from 'nest-winston';
import { MonitorModule } from './common/modules/monitor/monitor.module';

@Module({
  imports: [
    MonitorModule,
    ConfigModule.forRoot({
      load: [MysqlConfig],
    }),
    WinstonModule.forRoot(WinstonConfig()),
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
      .apply(
        LoggerMiddleware,
        CorsMiddleware,
        OriginMiddleware
      )
      .exclude('monitor')
      .forRoutes("/");
  }
}
