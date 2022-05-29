export class JsonApiResponse<DataModel = Record<string, unknown> | Array<never> | null> {
  statusCode = 200;
  message = 'ok';
  data: DataModel | null = null;

  constructor(partial: Partial<JsonApiResponse<DataModel>>) {
    Object.assign(this, partial);
  }
}
