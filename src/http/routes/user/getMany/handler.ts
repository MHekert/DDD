import http from 'http'
import fastify from 'fastify';
import { userService } from '../../../../modules/User';

export const handler = async (_req: fastify.FastifyRequest<http.IncomingMessage>, reply: fastify.FastifyReply<http.ServerResponse>) => {
  try {
    const users = await userService.get();
    reply.send({ users });
  } catch (error) {
    reply.send(error);
  }
}
