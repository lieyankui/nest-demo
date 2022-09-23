import { HttpStatus, Injectable, NestMiddleware, RequestMethod } from '@nestjs/common';
import { Request, Response } from 'express';
import { corsConfig } from '../../config/cors.config';

@Injectable()
export class CorsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: (error?: any) => void) {
    const { crossDomain } = corsConfig;
    const getMethod = (method) => RequestMethod[method];
    const origins = req.headers.origin;
    const origin = (Array.isArray(origins) ? origins[0] : origins) || '';
    const allowedOrigins = [...crossDomain.allowedOrigins];
    const allowedMethods = [
      RequestMethod.GET,
      RequestMethod.HEAD,
      RequestMethod.PUT,
      RequestMethod.PATCH,
      RequestMethod.POST,
      RequestMethod.DELETE
    ];
    const allowedHeaders = [
      'Authorization',
      'Origin',
      'No-Cache',
      'X-Requested-;With',
      'If-Modified-Since',
      'Pragma',
      'Last-Modified',
      'Cache-Control',
      'Expires',
      'Content-Type',
      'X-E4M-With'
    ];

    // Allow Origin
    if (!origin || allowedOrigins.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin || '*')
    }
    // Headers
    res.setHeader('Access-Control-Allow-Headers', allowedHeaders.join(','));
    res.setHeader('Access-Control-Allow-Methods', allowedMethods.map(getMethod).join(','));
    res.setHeader('Access-Control-Max-Age', '1728000');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');

    // Options Request
    if (req.method === getMethod(RequestMethod.OPTIONS)) {
      res.statusCode = HttpStatus.NO_CONTENT;
      res.end();
    }
    // else if (req.method === 'LINK') {
    //   res.status(HttpStatus.METHOD_NOT_ALLOWED).send({
    //     statusCode: '40501',
    //     message: '不支持的请求方式'
    //   }).end();
    // }
    else {
      return next();
    }

  }
}
