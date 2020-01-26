import { handler } from './handler'
import { schema } from './schema'
import { httpMethods } from '../../../config/httpMethods'

export const deleteBlog = {
	method: httpMethods.DELETE,
	url: '/blog/:senderId/:id', // temporary before logging introduction
	schema,
	handler,
}
