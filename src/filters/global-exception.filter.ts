import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpAdapterHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}
  catch(exception: any, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();
    // http 状态码
    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const exceptionRes = exception.getResponse();
    const responseBody = {
      status: httpStatus,
      ...exceptionRes
    };
    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}
