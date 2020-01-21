const params = {
  type: 'object',
  required: ['senderId', 'id'],
  properties: {
    id: { type: 'string' },
    senderId: { type: 'string' }, // temporary before logging introduction
  },
  additionalProperties: false,
};

export const request = { params }
