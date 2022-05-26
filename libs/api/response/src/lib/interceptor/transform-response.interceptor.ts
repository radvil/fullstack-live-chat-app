import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IApiResponse } from '@radvil/shared';
import { Reflector } from '@nestjs/core';
import { API_RES_MESSAGE_METADATA_KEY } from '../decorator';

@Injectable()
export class TransformApiResponseInterceptor<T = null> implements NestInterceptor<T, IApiResponse<T>> {
  constructor(private reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<IApiResponse<T>> {
    return next.handle().pipe(
      map((data) => {
        const message = this.reflector.get<string>(API_RES_MESSAGE_METADATA_KEY, context.getHandler());

        return <IApiResponse<T>>{
          statusCode: 200,
          data: data || null,
          message: message || 'ok',
        };
      })
    );
  }
}
