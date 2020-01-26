import http from 'http'
import fastify from 'fastify';
import { blogService } from '../../../../modules/Blog';

export const handler = async (_req: fastify.FastifyRequest<http.IncomingMessage>, reply: fastify.FastifyReply<http.ServerResponse>) => {
  try {
    const blogs = await blogService.get();
    reply.send({ blogs });
  } catch (error) {
    reply.send(error);
  }
}
