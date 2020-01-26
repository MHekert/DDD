import http from 'http'
import fastify from 'fastify';
import { blogService } from '../../../../modules/Blog';

export const handler = async (req: fastify.FastifyRequest<http.IncomingMessage>, reply: fastify.FastifyReply<http.ServerResponse>) => {
	try {
		const { body } = req;
		const blog = await blogService.create(body);
		reply.send(blog);
	} catch (error) {
		reply.send(error);
	}
}
