import * as path from 'path';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

export type Env = 'dev' | 'stage' | 'prod' ;

export function getEnvConfig<T>(folderPath = 'config'): T {
  const filePath = `${process.env.NODE_ENV || 'dev'}.env`;
  const envFile = path.resolve(
    __dirname,
    '..',
    folderPath,
    filePath
  );
  let envConfig = {};
  try {
    envConfig = dotenv.parse(fs.readFileSync(envFile));
  } catch (error) {
    console.log('读取配置文件失败！');
  }
  return envConfig as unknown as T;
}

export function getEnv(): Env {
  return process.env.NODE_ENV as Env;
}

