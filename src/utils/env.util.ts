import * as path from 'path';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

export function getEnvConfig<T>(folderPath = 'config'): T {
  const filePath = `${process.env.NODE_ENV || 'dev'}.env`;
  const envFile = path.resolve(
    __dirname,
    '..',
    folderPath,
    filePath
  );
  const envConfig = dotenv.parse(fs.readFileSync(envFile));
  return envConfig as unknown as T;
}
