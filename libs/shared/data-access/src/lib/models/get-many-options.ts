import { Transform, Type } from 'class-transformer';
import { IsNumber, IsObject, IsOptional, Min } from 'class-validator';
import { FindOptionsOrder } from 'typeorm';

function toObject(stringObject: string) {
  const result = JSON.parse(stringObject);
  return result;
}

export class DtoGetMany<Model = unknown> {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  offset?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  limit?: number;

  @IsOptional()
  @Transform(({ value }) => toObject(value))
  @IsObject()
  order?: FindOptionsOrder<Model>;
}
