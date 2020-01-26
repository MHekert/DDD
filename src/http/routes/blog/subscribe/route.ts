import { handler } from './handler'
import { schema } from './schema'
import { httpMethods } from '../../../config/httpMethods'

export const subscribeBlog = {
	method: httpMethods.POST,
	url: '/blog/subscribe',
	schema,
	handler,
}
