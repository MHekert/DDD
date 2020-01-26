import { handler } from './handler'
import { schema } from './schema'
import { httpMethods } from '../../../config/httpMethods'

export const createBlog = {
	method: httpMethods.PUT,
	url: '/blog',
	schema,
	handler,
}
