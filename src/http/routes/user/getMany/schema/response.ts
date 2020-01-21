import { userDTO } from '../../schemas/userDTO'

export const response = {
	200: {
		type: 'object',
		properties: {
			users: {
				type: 'array', 
				items: userDTO,
			},
		},
	},
};
