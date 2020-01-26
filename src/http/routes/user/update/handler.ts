import http from 'http'
import fastify from 'fastify';
import { userService } from '../../../../modules/User';

export const handler = async (req: fastify.FastifyRequest<http.IncomingMessage>, reply: fastify.FastifyReply<http.ServerResponse>) => {
	try {
		const { id, senderId } = req.params;
		const { body } = req;
		const user = await userService.update(senderId, id, body);
		reply.send(user);
	} catch (error) {
		reply.send(error);
	}
}
