import { HttpStatus } from '@nestjs/common';

export type TApiErrorCode = Omit<HttpStatus, HttpStatus.OK>;

export interface IJsonApiErrorRes {
  statusCode: TApiErrorCode;
  message: string[] | string;
  error: string;
}
