import { Inject, Injectable } from '@nestjs/common';
import * as path from 'path';
import { ConfigOptions, EnvConfig } from './interfaces';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { CONFIG_OPTIONS } from './config.constant';

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(@Inject(CONFIG_OPTIONS) private options: ConfigOptions) {
    // console.log('process env: ', process.env.NODE_ENV === 'development');

    const filePath = `${process.env.NODE_ENV || 'development'}.env`;
    // console.log('__dirname：', __dirname);
    const envFile = path.resolve(
      __dirname,
      '../',
      this.options.folder,
      filePath,
    );
    this.envConfig = dotenv.parse(fs.readFileSync(envFile));

    // console.log('this.options: ', this.options);
    // console.log('this.envConfig: ', this.envConfig);
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
