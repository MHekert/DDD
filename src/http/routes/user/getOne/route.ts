import { handler } from './handler'
import { schema } from './schema'
import { httpMethods } from '../../../config/httpMethods'

export const getUser = {
	method: httpMethods.GET,
	url: '/user/:id',
	schema,
	handler,
}
