import { handler } from './handler'
import { schema } from './schema'
import { httpMethods } from '../../../config/httpMethods'

export const getBlogs = {
	method: httpMethods.GET,
	url: '/blog',
	schema,
	handler,
}
