import {Entity, model, property} from '@loopback/repository';

@model()
export class Pool extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  members?: string[];


  constructor(data?: Partial<Pool>) {
    super(data);
  }
}
