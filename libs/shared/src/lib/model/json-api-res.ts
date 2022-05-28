import { IJsonApiRes } from '../interfaces';

export class JsonApiRes<DataModel = Record<string, unknown> | Array<never> | null> implements IJsonApiRes<DataModel> {
  statusCode = 200;
  message = 'ok';
  data: DataModel | null = null;

  constructor(partial: Partial<JsonApiRes<DataModel>>) {
    Object.assign(this, partial);
  }
}
