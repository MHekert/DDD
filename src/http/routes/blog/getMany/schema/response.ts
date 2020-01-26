import { blogDTO } from '../../schemas/blogDTO'

export const response = {
	200: {
		type: 'object',
		properties: {
			users: {
				type: 'array', 
				items: blogDTO,
			},
		},
	},
};
