const body = {
  type: 'object',
  required: ['name', 'author'],
  properties: {
    name: { type: 'string' },
    author: { type: 'string' }, // temporary
  },
  additionalProperties: false,
};

export const request = { body }
