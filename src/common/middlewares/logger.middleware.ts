import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { Logger } from 'winston';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(@Inject('winston') private readonly logger: Logger) {}
  use(req: Request, res: Response, next: (error?: any) => void) {
    this.logger.info(`[接收到请求] - 请求路径: ${req.url} --- 请求体: ${JSON.stringify(req.body)}`);
    next();
  }
}
