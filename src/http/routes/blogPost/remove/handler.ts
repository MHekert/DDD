import http from 'http'
import fastify from 'fastify';
import { blogService } from '../../../../modules/Blog';

export const handler = async (req: fastify.FastifyRequest<http.IncomingMessage>, reply: fastify.FastifyReply<http.ServerResponse>) => {
  try {
    const { blogId, postId, senderId } = req.params; // temporary before logging introduction
    await blogService.removePost(senderId, blogId, postId);
    reply.send();
  } catch (error) {
    reply.send(error);
  }
}
