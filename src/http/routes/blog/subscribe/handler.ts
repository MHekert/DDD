import http from 'http'
import fastify from 'fastify';
import { blogService } from '../../../../modules/Blog';

export const handler = async (req: fastify.FastifyRequest<http.IncomingMessage>, reply: fastify.FastifyReply<http.ServerResponse>) => {
	try {
		const { blogId, subscribe, userId } = req.body;
		await blogService.subscribe(userId, blogId, subscribe);
		reply.send({});
	} catch (error) {
		reply.send(error);
	}
}
