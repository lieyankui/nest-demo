import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CatsModule } from './cats/cat.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from './middlewares/logger.middleware';
// import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    // UserModule,
    CatsModule,
    // DatabaseModule,
    // ConfigModule.register({folder: './config'})
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // 添加路由中间件
    // consumer
    //   .apply(LoggerMiddleware)
    //   .forRoutes({path: "cats", method: RequestMethod.GET});
  }
}
