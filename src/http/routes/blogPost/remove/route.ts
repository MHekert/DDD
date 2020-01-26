import { handler } from './handler'
import { schema } from './schema'
import { httpMethods } from '../../../config/httpMethods'

export const deleteBlogPost = {
	method: httpMethods.DELETE,
	url: '/blog/:senderId/:blogId/:postId', // temporary before logging introduction
	schema,
	handler,
}
