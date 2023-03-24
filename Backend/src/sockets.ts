// Import packages
import debug from 'debug';
import { Server as SocketIO } from 'socket.io';

// Create debug logger
const logger = debug('backend:socket');

export default (server: any) => {
  logger('Initializing socket.io...');

  const io = new SocketIO(server, {
    cors: {
      origin: '*',
    },
  });

  io.on('connection', (socket: any) => {
    logger(`Client connected [id=${socket.id}]`);

    socket.on('disconnect', () => {
      logger('Client disconnected');
    });
  });
};
