// Before this file is executed, the .env.local file is loaded by the dotenv package
import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/../.env.local' });

// Import packages
import debug, { Debugger } from 'debug';
import { Server } from 'http';

// Import App from app.js
import { app } from './app';

// Import Sockets from sockets.js
import sockets from './sockets';

// Import LeapMotion from leapMotion.js
import * as leapMotion from './leapMotion';

// Create debug logger
const logger: Debugger = debug('backend:startup');

// Add Port
const port: string | number = (process.env.PORT as string) || 3001;

// Start server
const server: Server = app.listen(port, () => {
  logger(`Listening on port ${port}...`);

  // Start socket
  sockets(server, leapMotion);
});
