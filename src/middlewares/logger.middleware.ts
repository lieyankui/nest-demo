import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import * as moment from 'moment';
import { DATETIME_PATTERN } from '../constants/common.constant';
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: (error?: any) => void) {
    /**
     * req: req: IncomingMessage {
        rawHeaders: [
          'Content-Type',
          'application/json',
          'User-Agent',
          'PostmanRuntime/7.26.8',
          'Accept',
          '*\/*',
          'Postman-Token',
          'a7b03d87-100a-4ffd-9fc9-b746d62b059d',
          'Host',
          'localhost:3000',
          'Accept-Encoding',
          'gzip, deflate, br',
          'Connection',
          'keep-alive',
          'Content-Length',
          '97'
        ],
        rawTrailers: [],
        url: '/?=',
        method: 'POST',
        statusCode: null,
        statusMessage: null,
        baseUrl: '/cats',
        originalUrl: '/cats?=',
        _parsedUrl: Url {
          protocol: null,
          slashes: null,
          auth: null,
          host: null,
          port: null,
          hostname: null,
          hash: null,
          search: '?=',
          query: '=',
          pathname: '/cats',
          path: '/cats?=',
          href: '/cats?=',
          _raw: '/cats?='
        },
        params: {},
        query: {},
        body: {
          name: 'kitten',
          age: 12,
          breed: 'kitten breed',
          remark: 'remark'
        },
      }
     */
    console.log(11111);
    console.log(`[${moment().format(DATETIME_PATTERN)}-request received] url: ${req.url}`);
    console.log(`[${moment().format(DATETIME_PATTERN)}-request received] hostname: ${req.hostname}`);
    console.log(`[${moment().format(DATETIME_PATTERN)}-request received] baseUrl: ${req.baseUrl}`);
    console.log(`[${moment().format(DATETIME_PATTERN)}-request received] ip: ${req.ip}`);
    console.log(`[${moment().format(DATETIME_PATTERN)}-request received] ips: ${req.ips}`);
    console.log(`[${moment().format(DATETIME_PATTERN)}-request received] cookies: ${req.cookies}`);
    console.log(`[${moment().format(DATETIME_PATTERN)}-request received] originalUrl: ${req.originalUrl}`);
    console.log(`[${moment().format(DATETIME_PATTERN)}-request received] headers: `, req.headers);
    console.log(`[${moment().format(DATETIME_PATTERN)}-request received] method: ${req.method}`);
    console.log(`[${moment().format(DATETIME_PATTERN)}-request received] protocol: ${req.protocol}`);
    console.log(`[${moment().format(DATETIME_PATTERN)}-request received] path: ${req.path}`);
    console.log(`[${moment().format(DATETIME_PATTERN)}-request received] route: ${req.route}`);
    console.log(`[${moment().format(DATETIME_PATTERN)}-request received] params: `, req.params);
    console.log(`[${moment().format(DATETIME_PATTERN)}-request received] query: `, req.query);
    console.log(`[${moment().format(DATETIME_PATTERN)}-request received] body: `, req.body);

    console.log(`[${moment().format(DATETIME_PATTERN)}-response responsing]: ${res.statusCode}`,res.json);
    // res.send("LoggerMiddleware 拦截后的响应信息");
    res.append("append", "append value"); // 会添加到响应头中
    next();
    // const { method, path } = req;
    // console.log(`${method} ${path}`);
    // next();
  }
}

export function logger(req: Request, res: Response, next: (error?: any) => void) {
  /**
   * req: req: IncomingMessage {
      rawHeaders: [
        'Content-Type',
        'application/json',
        'User-Agent',
        'PostmanRuntime/7.26.8',
        'Accept',
        '*\/*',
        'Postman-Token',
        'a7b03d87-100a-4ffd-9fc9-b746d62b059d',
        'Host',
        'localhost:3000',
        'Accept-Encoding',
        'gzip, deflate, br',
        'Connection',
        'keep-alive',
        'Content-Length',
        '97'
      ],
      rawTrailers: [],
      url: '/?=',
      method: 'POST',
      statusCode: null,
      statusMessage: null,
      baseUrl: '/cats',
      originalUrl: '/cats?=',
      _parsedUrl: Url {
        protocol: null,
        slashes: null,
        auth: null,
        host: null,
        port: null,
        hostname: null,
        hash: null,
        search: '?=',
        query: '=',
        pathname: '/cats',
        path: '/cats?=',
        href: '/cats?=',
        _raw: '/cats?='
      },
      params: {},
      query: {},
      body: {
        name: 'kitten',
        age: 12,
        breed: 'kitten breed',
        remark: 'remark'
      },
    }
   */
  console.log(11111);
  console.log(`[${moment().format(DATETIME_PATTERN)}-request received] url: ${req.url}`);
  console.log(`[${moment().format(DATETIME_PATTERN)}-request received] hostname: ${req.hostname}`);
  console.log(`[${moment().format(DATETIME_PATTERN)}-request received] baseUrl: ${req.baseUrl}`);
  console.log(`[${moment().format(DATETIME_PATTERN)}-request received] ip: ${req.ip}`);
  console.log(`[${moment().format(DATETIME_PATTERN)}-request received] ips: ${req.ips}`);
  console.log(`[${moment().format(DATETIME_PATTERN)}-request received] cookies: ${req.cookies}`);
  console.log(`[${moment().format(DATETIME_PATTERN)}-request received] originalUrl: ${req.originalUrl}`);
  console.log(`[${moment().format(DATETIME_PATTERN)}-request received] headers: `, req.headers);
  console.log(`[${moment().format(DATETIME_PATTERN)}-request received] method: ${req.method}`);
  console.log(`[${moment().format(DATETIME_PATTERN)}-request received] protocol: ${req.protocol}`);
  console.log(`[${moment().format(DATETIME_PATTERN)}-request received] path: ${req.path}`);
  console.log(`[${moment().format(DATETIME_PATTERN)}-request received] route: ${req.route}`);
  console.log(`[${moment().format(DATETIME_PATTERN)}-request received] params: `, req.params);
  console.log(`[${moment().format(DATETIME_PATTERN)}-request received] query: `, req.query);
  console.log(`[${moment().format(DATETIME_PATTERN)}-request received] body: `, req.body);

  console.log(`[${moment().format(DATETIME_PATTERN)}-response responsing]: ${res.statusCode}`,res.json);
  // res.send("LoggerMiddleware 拦截后的响应信息");
  res.append("append", "append value"); // 会添加到响应头中
  next();
  // const { method, path } = req;
  // console.log(`${method} ${path}`);
  // next();
}
