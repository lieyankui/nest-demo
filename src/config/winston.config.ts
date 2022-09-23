import * as winston from 'winston';
import { getDirPath, getEnvConfig } from '../utils';

require('winston-daily-rotate-file');

export default () => {
  const level = 'info';
  const logDir = getDirPath(
    getEnvConfig('logger_log_dir') || 'logs',
  );
  console.log('logDir: ', logDir)
  // @ts-ignore
  const transport = new winston.transports.DailyRotateFile({
    dirname: logDir,
    filename: 'app-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    xippedArchive: true,
    maxSize: '20m',
    maxFiles: '30d',
  });
  return {
    level,
    format: winston.format.combine(
      winston.format.colorize({
        colors: {
          info: 'blue',
          warn: 'yellow',
          debug: 'blue',
        },
      }),
      winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      winston.format.printf((info) => {
        if (info.stack) {
          info.message = info.stack;
        }
        return `[[${info.timestamp}]] [pid - [${info.pid}]] ${info.level}: [${
          info.context || 'Application'
        }] ${info.message}`;
      }),
    ),
    defaultMeta: { pid: process.pid },
    transports: [
      transport,
      new winston.transports.Console(),
      new winston.transports.File({
        dirname: logDir,
        filename: 'error.log',
        level: 'error',
      }),
    ],
  };
};
