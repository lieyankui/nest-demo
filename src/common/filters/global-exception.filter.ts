import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpAdapterHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Logger } from 'winston';
import { format } from '../../utils';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost, private readonly logger: Logger) {}
  catch(exception: any, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();
    // http 状态码
    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const exceptionRes = exception.getResponse();
    const req = ctx.getRequest();
    const responseBody = {
      ...exceptionRes,
      timestamp: format(),
      path: req.url,
      message: Array.isArray(exceptionRes.message) ? exceptionRes.message.join(',') : exceptionRes.message,
    };
    this.logger.error((`[global-exception.filter] error : ${JSON.stringify(responseBody)}`));
    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}
