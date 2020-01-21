import { handler } from './handler'
import { schema } from './schema'
import { httpMethods } from '../../../config/httpMethods'

export const getUsers = {
	method: httpMethods.GET,
	url: '/user',
	schema,
	handler,
}
