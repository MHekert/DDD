const params = {
  type: 'object',
  required: ['senderId', 'blogId', 'postId'],
  properties: {
    postId: { type: 'string' },
    blogId: { type: 'string' },
    senderId: { type: 'string' }, // temporary before logging introduction
  },
  additionalProperties: false,
};

export const request = { params }
