const params = {
  type: 'object',
  required: ['id'],
  properties: {
    id: { type: 'string' },
  },
  additionalProperties: false,
};

export const request = { params }
