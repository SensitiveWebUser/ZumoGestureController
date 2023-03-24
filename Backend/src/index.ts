// Before this file is executed, the .env.local file is loaded by the dotenv package
import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/../.env.local' });

// Import packages
import debug from 'debug';

// Import App from app.js
import { app } from './app';

// Import Sockets from sockets.js
import sockets from './sockets';

// Create debug logger
const logger = debug('backend:startup');

// Add Port
const port = process.env.PORT || 3001;

// Start server
const server = app.listen(port, () => logger(`Listening on port ${port}...`));

// Start socket
sockets(server);
