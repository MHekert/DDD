import http from 'http'
import fastify from 'fastify';
import { blogService } from '../../../../modules/Blog';

export const handler = async (req: fastify.FastifyRequest<http.IncomingMessage>, reply: fastify.FastifyReply<http.ServerResponse>) => {
	try {
		const { body: { blogId, content, author} } = req;
		const post = await blogService.addPost(blogId, { content, author });
		reply.send(post);
	} catch (error) {
		reply.send(error);
	}
}
