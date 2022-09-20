import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { corsConfig } from '../config/cors.config';
import { ANONYNOUSE_ERROR } from '../constants';

@Injectable()
export class OriginMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: (error?: any) => void) {
    const { crossDomain } = corsConfig;
    const { origin, referer } = req.headers;
    const checkHeader = (field) =>
      !field ||
      crossDomain.allowedReferer === '*' ||
      crossDomain.allowedReferer.includes(field);
    const isVerifiedOrigin = checkHeader(origin);
    const isVerifiedReferer = checkHeader(referer);
    if (!isVerifiedOrigin && !isVerifiedReferer) {
      res.statusCode = HttpStatus.FORBIDDEN;
      return res
        .send({
          ...ANONYNOUSE_ERROR,
        })
        .end();
    }
    return next();
  }
}
