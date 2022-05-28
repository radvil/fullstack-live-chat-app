import { HttpStatus } from "@nestjs/common";

export interface IJsonApiRes<T> {
  statusCode: HttpStatus.OK | HttpStatus.CREATED;
  message: string;
  data: T | null;
}
