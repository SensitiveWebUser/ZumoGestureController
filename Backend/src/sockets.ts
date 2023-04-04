// Import packages
import debug, { Debugger } from 'debug';
import { Server } from 'http';
import { Server as SocketIO, Socket, ServerOptions } from 'socket.io';

// Import API requests/post from zumoAPI.ts
import { request, post } from './ZumoApi';

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

  io.on('connection', (socket: Socket): void => {
    logger(`Client connected [id=${socket.id}]`);

    //TODO: Check if Raspberry Pi is connected to the server

    socket.on('disconnect', (): void => {
      logger('Client disconnected');
    });

    socket.on('gesture', (): void => {
      logger('Gesture Requested');
      //TODO: Send gesture to frontend via socket.io
      io.emit('gesture', 'idle');
    });

    socket.on('movement', (movement: string = 'idle'): void => {
      logger(`Movement Requested ${movement}`);
      post(`/movement?MOVE=${movement}`);
    });
  });
};
