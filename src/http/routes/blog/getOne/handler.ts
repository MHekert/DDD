import http from 'http'
import fastify from 'fastify';
import { blogService } from '../../../../modules/Blog';

export const handler = async (req: fastify.FastifyRequest<http.IncomingMessage>, reply: fastify.FastifyReply<http.ServerResponse>) => {
  try {
    const { id } = req.params;
    const user = await blogService.getById(id);
    reply.send(user);
  } catch (error) {
    reply.send(error);
  }
}
