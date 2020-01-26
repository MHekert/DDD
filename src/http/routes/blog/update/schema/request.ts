const body = {
  type: 'object',
  required: ['name', 'author'],
  properties: {
    name: { type: 'string' },
    author: { type: 'string' }, // temporary
  },
  additionalProperties: false,
};

const params = {
  type: 'object',
  required: ['senderId', 'id'],
  properties: {
    id: { type: 'string' },
    senderId: { type: 'string' }, // temporary before logging introduction
  },
  additionalProperties: false,
};

export const request = { body, params };
