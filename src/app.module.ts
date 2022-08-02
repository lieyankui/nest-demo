import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CatsModule } from './cats/cat.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
// import { ConfigModule } from './config/config.module';

console.log('process.env: ', process.env);

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
export class AppModule {}
