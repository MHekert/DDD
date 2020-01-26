import http from 'http'
import fastify from 'fastify';
import { blogService } from '../../../../modules/Blog';

export const handler = async (req: fastify.FastifyRequest<http.IncomingMessage>, reply: fastify.FastifyReply<http.ServerResponse>) => {
  try {
    const { id, senderId } = req.params; // temporary before logging introduction
    await blogService.delete(senderId, id);
    reply.send();
  } catch (error) {
    reply.send(error);
  }
}
