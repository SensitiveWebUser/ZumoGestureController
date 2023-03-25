// Import packages
import debug, { Debugger } from 'debug';
import { Server } from 'http';
import { Server as SocketIO, Socket, ServerOptions } from 'socket.io';

// Create debug logger
const logger: Debugger = debug('backend:socket');

export default (server: Server) => {
  logger('Initializing socket.io...');

  const options: ServerOptions = {
    cors: {
      origin: '*',
    },
  } as ServerOptions;

  const io = new SocketIO(server, options);

  io.on('connection', (socket: Socket) => {
    logger(`Client connected [id=${socket.id}]`);

    //TODO: Check if Raspberry Pi is connected to the server

    socket.on('disconnect', () => {
      logger('Client disconnected');
    });

    socket.on('gesture', () => {
      logger('Gesture Requested');
      //TODO: Send gesture to frontend via socket.io
      io.emit('gesture', 'idle');
    });
  });
};
