import { handler } from './handler'
import { schema } from './schema'
import { httpMethods } from '../../../config/httpMethods'

export const deleteUser = {
	method: httpMethods.DELETE,
	url: '/user/:senderId/:id', // temporary before logging introduction
	schema,
	handler,
}
