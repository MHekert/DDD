import { handler } from './handler'
import { schema } from './schema'
import { httpMethods } from '../../../config/httpMethods'

export const updateBlog = {
	method: httpMethods.PATCH,
	url: '/blog/:id',
	schema,
	handler,
}
