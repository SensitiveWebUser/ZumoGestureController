// Import packages
import debug, { Debugger } from 'debug';
import { Server } from 'http';
import { Server as SocketIO, Socket, ServerOptions } from 'socket.io';

// Import API requests/post from zumoAPI.ts
import { post } from './ZumoApi';

// Create debug logger
const logger: Debugger = debug('backend:socket');

// Export socket function
export default (server: Server, leapMotion: any): void => {
  // Log socket initialization
  logger('Initializing socket.io...');

  // Set cors options
  const options: ServerOptions = {
    cors: {
      origin: '*',
    },
  } as ServerOptions;

  // Initialize socket
  const io = new SocketIO(server, options);

  // Listen for client connection
  io.on('connection', (socket: Socket): void => {
    // Log client connection
    logger(`Client connected [id=${socket.id}]`);

    // Listen for client disconnection
    socket.on('disconnect', (): void => {
      // Log client disconnection
      logger('Client disconnected');
    });

    // Listen for gesture event from client
    // Will then emit gesture to client based on leapMotion data
    socket.on('gesture', (): void => {
      logger('Gesture Requested');

      // Set default gesture to idle
      let handGesture: string = 'idle';

      // Get horizontal and vertical movement from leapMotion
      const horizontal: number = leapMotion.default.getHorizontalMovement();
      const vertical: number = leapMotion.default.getVerticalMovement();
      const isMoving: boolean = leapMotion.default.getIsActive();

      // Check if hand is moving and in which direction. If not moving, set gesture to idle
      if (isMoving) {
        if (horizontal > 0) {
          handGesture = 'right';
        } else if (horizontal < 0) {
          handGesture = 'left';
        } else if (vertical > 0) {
          handGesture = 'forward';
        } else if (vertical < 0) {
          handGesture = 'backward';
        }
      }

      // Emit gesture to client
      io.emit('gesture', { gesture: handGesture, isMoving });
    });

    // Listen for movement event from client
    // Will then post movement to Raspberry Pi Pico based on button pressed on client
    socket.on(
      'movement',
      (movement: { horizontal: number; vertical: number }): void => {
        logger('Movement Requested: ', movement);
        post(
          `/movement?HORIZONTAL=${movement.horizontal}&VERTICAL=${movement.vertical}`
        );
      }
    );

    // Listen for speed event from client
    // Will then post speed to Raspberry Pi Pico based on slider value on client
    socket.on('speed', (speed: number = 0): void => {
      logger(`Speed Requested ${speed}`);
      post(`/speed?SPEED=${speed}`);
    });
  });
};
