import http from 'http'
import fastify from 'fastify';
import { blogService } from '../../../../modules/Blog';

export const handler = async (req: fastify.FastifyRequest<http.IncomingMessage>, reply: fastify.FastifyReply<http.ServerResponse>) => {
	try {
		const { id, senderId } = req.params;
		const { body } = req;
		const user = await blogService.update(senderId, id, body);
		reply.send(user);
	} catch (error) {
		reply.send(error);
	}
}
