import { DynamicModule, Module } from '@nestjs/common';
import { CONFIG_OPTIONS } from './config.constant';
import { ConfigService } from './config.service';
import { ConfigOptions } from './interfaces';

@Module({})
export class ConfigModule {
  static register(options: ConfigOptions): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        {
          provide: CONFIG_OPTIONS,
          useValue: options,
        },
        ConfigService,
      ],
      exports: [ConfigService],
    };
  }
}
