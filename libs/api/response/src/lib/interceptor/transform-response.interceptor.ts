import { CallHandler, ExecutionContext, HttpStatus, Injectable, NestInterceptor } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IJsonApiRes, JsonApiRes } from '@radvil/shared';
import { Observable, map } from 'rxjs';
import { API_RES_MESSAGE_METADATA_KEY } from '../decorator';

const DEFAULT_STATUS_CODE = 200;

HttpStatus.OK;

@Injectable()
export class TransformApiResponseInterceptor<T = null> implements NestInterceptor<T, IJsonApiRes<T>> {
  constructor(private reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<IJsonApiRes<T>> {
    return next.handle().pipe(
      map((data: T) => {
        const methodName = context.switchToHttp().getRequest<Request>().method;

        const statusCode = methodName == 'PUT' ? HttpStatus.CREATED : HttpStatus.OK;

        if (data instanceof JsonApiRes) {
          data.statusCode = statusCode;

          return data;
        }

        const message = this.reflector.get<string>(API_RES_MESSAGE_METADATA_KEY, context.getHandler());

        return <IJsonApiRes<T>>new JsonApiRes({
          statusCode: DEFAULT_STATUS_CODE,
          data: data ?? null,
          message: message ?? 'ok',
        });
      })
    );
  }
}
