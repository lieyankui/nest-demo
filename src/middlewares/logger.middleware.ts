import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import * as moment from 'moment';
import { DATETIME_PATTERN } from '../constants/common.constant';
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: (error?: any) => void) {
    // console.log(`[${moment().format(DATETIME_PATTERN)}-request received] url: ${req.url}`);
    // console.log(`[${moment().format(DATETIME_PATTERN)}-request received] hostname: ${req.hostname}`);
    // console.log(`[${moment().format(DATETIME_PATTERN)}-request received] baseUrl: ${req.baseUrl}`);
    // console.log(`[${moment().format(DATETIME_PATTERN)}-request received] ip: ${req.ip}`);
    // console.log(`[${moment().format(DATETIME_PATTERN)}-request received] ips: ${req.ips}`);
    // console.log(`[${moment().format(DATETIME_PATTERN)}-request received] cookies: ${req.cookies}`);
    // console.log(`[${moment().format(DATETIME_PATTERN)}-request received] originalUrl: ${req.originalUrl}`);
    // console.log(`[${moment().format(DATETIME_PATTERN)}-request received] headers: `, req.headers);
    // console.log(`[${moment().format(DATETIME_PATTERN)}-request received] method: ${req.method}`);
    // console.log(`[${moment().format(DATETIME_PATTERN)}-request received] protocol: ${req.protocol}`);
    // console.log(`[${moment().format(DATETIME_PATTERN)}-request received] path: ${req.path}`);
    // console.log(`[${moment().format(DATETIME_PATTERN)}-request received] route: ${req.route}`);
    // console.log(`[${moment().format(DATETIME_PATTERN)}-request received] params: `, req.params);
    // console.log(`[${moment().format(DATETIME_PATTERN)}-request received] query: `, req.query);
    console.log(`[${moment().format(DATETIME_PATTERN)}-request received] body: `, req.body);
    // console.log(`[${moment().format(DATETIME_PATTERN)}-response responsing]: ${res.statusCode}`,res.json);
    next();
  }
}
// 可通过 app.use(logger) 调用   比类的方式先执行
export function logger(req: Request, res: Response, next: NextFunction) {
  // console.log(`[${moment().format(DATETIME_PATTERN)}-request received] url: ${req.url}`);
  // console.log(`[${moment().format(DATETIME_PATTERN)}-request received] hostname: ${req.hostname}`);
  // console.log(`[${moment().format(DATETIME_PATTERN)}-request received] baseUrl: ${req.baseUrl}`);
  // console.log(`[${moment().format(DATETIME_PATTERN)}-request received] ip: ${req.ip}`);
  // console.log(`[${moment().format(DATETIME_PATTERN)}-request received] ips: ${req.ips}`);
  // console.log(`[${moment().format(DATETIME_PATTERN)}-request received] cookies: ${req.cookies}`);
  // console.log(`[${moment().format(DATETIME_PATTERN)}-request received] originalUrl: ${req.originalUrl}`);
  // console.log(`[${moment().format(DATETIME_PATTERN)}-request received] headers: `, req.headers);
  // console.log(`[${moment().format(DATETIME_PATTERN)}-request received] method: ${req.method}`);
  // console.log(`[${moment().format(DATETIME_PATTERN)}-request received] protocol: ${req.protocol}`);
  // console.log(`[${moment().format(DATETIME_PATTERN)}-request received] path: ${req.path}`);
  // console.log(`[${moment().format(DATETIME_PATTERN)}-request received] route: ${req.route}`);
  // console.log(`[${moment().format(DATETIME_PATTERN)}-request received] params: `, req.params);
  // console.log(`[${moment().format(DATETIME_PATTERN)}-request received] query: `, req.query);
  console.log(`[logger-${moment().format(DATETIME_PATTERN)}-request received] body: `, req.body);
  // TODO: the unknown reason causes req.body to be undefined
  // console.log(`[${moment().format(DATETIME_PATTERN)}-response responsing]: ${res.statusCode}`,res.getHeaders());
  next();

}
