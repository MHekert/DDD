import { handler } from './handler'
import { schema } from './schema'
import { httpMethods } from '../../../config/httpMethods'

export const createUser = {
	method: httpMethods.PUT,
	url: '/user',
	schema,
	handler,
}
