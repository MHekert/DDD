import { handler } from './handler'
import { schema } from './schema'
import { httpMethods } from '../../../config/httpMethods'

export const getBlog = {
	method: httpMethods.GET,
	url: '/blog/:id',
	schema,
	handler,
}
