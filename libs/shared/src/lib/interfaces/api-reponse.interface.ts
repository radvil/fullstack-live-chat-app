import { HttpStatus } from '@nestjs/common';

export interface IApiResponse<D> {
  statusCode: HttpStatus.OK;
  message: string;
  data: D | null;
}

export type TApiRes<D> = IApiResponse<D>;

export type TApiErrorCode = Omit<HttpStatus, HttpStatus.OK>;

export interface TApiErrorResponse {
  statusCode: TApiErrorCode;
  message: string[] | string;
  error: string;
}
