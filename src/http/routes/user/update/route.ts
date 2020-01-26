import { handler } from './handler'
import { schema } from './schema'
import { httpMethods } from '../../../config/httpMethods'

export const updateUser = {
	method: httpMethods.PUT,
	url: '/user/:id',
	schema,
	handler,
}
