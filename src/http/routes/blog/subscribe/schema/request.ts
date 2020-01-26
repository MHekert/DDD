const body = {
  type: 'object',
  required: ['blogId', 'subscribe', 'userId'],
  properties: {
    blogId: { type: 'string' },
    subscribe: { type: 'boolean' },
    userId: { type: 'string' }, // temporary
  },
  additionalProperties: false,
};


export const request = { body };
