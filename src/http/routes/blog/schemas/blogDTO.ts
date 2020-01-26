import { postDTO } from './postDTO'

export const blogDTO = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    author: { type: 'string' },
    subscribers: { type: 'string' },
    posts: {
      type: 'array',
      items: postDTO,
    },
    id: { type: 'string' },
  },
};
