const body = {
  type: 'object',
  required: ['firstName', 'lastName', 'email', 'password'],
  properties: {
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    email: { type: 'string' },
    password: { type: 'string' },
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

export const request = { body, params }
