import { HttpStatus } from '@nestjs/common';

export type IApiErrorCode = Omit<HttpStatus, HttpStatus.OK>;

export interface IJsonApiErrorResponse {
  statusCode: IApiErrorCode;
  message: string[] | string;
  error: string;
}
