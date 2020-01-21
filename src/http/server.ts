import fastify from 'fastify';
import { routes } from './routes'

const server = fastify({
  logger: true,
});

routes.forEach(route => {
  server.route(route);
});

export const start = async () => {
	try {
    await server.listen(3000);
    server.server.address()
	} catch (err) {
		server.log.error(err, null, 2);
	}
};
