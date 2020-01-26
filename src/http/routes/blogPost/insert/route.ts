import { handler } from './handler'
import { schema } from './schema'
import { httpMethods } from '../../../config/httpMethods'

export const insertBlogPost = {
	method: httpMethods.PUT,
	url: '/blog/post',
	schema,
	handler,
}
