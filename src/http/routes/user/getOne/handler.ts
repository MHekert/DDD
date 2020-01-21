import http from 'http'
import fastify from 'fastify';
import { userService } from '../../../../modules/User';

export const handler = async (req: fastify.FastifyRequest<http.IncomingMessage>, reply: fastify.FastifyReply<http.ServerResponse>) => {
  try {
    const { id } = req.params;
    const user = await userService.getById(id) 
    reply.send(user);
  } catch (error) {
    reply.send(error);
  }
}
