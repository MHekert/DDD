const body = {
  type: 'object',
  required: ['name', 'author'],
  properties: {
    blogId: { type: 'string' },
    author: { type: 'string' }, // temporary
    content: { type: 'string' },
  },
  additionalProperties: false,
};

export const request = { body }
