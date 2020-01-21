import http from 'http'
import fastify from 'fastify';
import { userService } from '../../../../modules/User';

export const handler = async (req: fastify.FastifyRequest<http.IncomingMessage>, reply: fastify.FastifyReply<http.ServerResponse>) => {
  try {
    const { id, senderId } = req.params; // temporary before logging introduction
    await userService.delete(senderId, id);
    reply.send();
  } catch (error) {
    reply.send(error);
  }
}
