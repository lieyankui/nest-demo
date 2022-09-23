import * as path from 'path';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { EnvConfig } from '../config/interfaces';

export type Env = 'dev' | 'stage' | 'prod' ;
const ENV_CONF_DIR = 'config';
let envConfig = null;


export function getEnvConfig(key?: keyof EnvConfig) {
  if (!envConfig) {
    envConfig = readEnvConfig(ENV_CONF_DIR);
  }
  return !!key && !!envConfig ? envConfig[key]: envConfig;
}

// 读取配置的环境相关变量
export function readEnvConfig<T>(envConfDir = 'config') {
  const filePath = `${process.env.NODE_ENV || 'dev'}.env`;
  const envFile = path.resolve(
    __dirname,
    '..',
    envConfDir,
    filePath
  );
  try {
    return dotenv.parse(fs.readFileSync(envFile)) as unknown as T;
  } catch (error) {
    console.log('读取配置文件失败！');
    return null;
  }
}

export function getEnv(): Env {
  return process.env.NODE_ENV as Env;
}

export function getRootPath() {
  return path.resolve(__dirname, '..');
}

export function getDirPath(dir: string | string[]) {
  if (!Array.isArray(dir) && dir) {
    dir = [dir];
  }
  return path.resolve(getRootPath(), ...dir );
}


