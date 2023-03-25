// Import packages
import express, { Request, Application } from 'express';
import debug, { Debugger } from 'debug';
import helmet from 'helmet';
import cors from 'cors';

// Import middlewares
import { errorHandler } from './middlewares';

// Import errors
import { NotFoundError } from './errors';

// Create debug logger
const logger: Debugger = debug('backend:request');

// Log initialization
logger('Initializing app...');

// Create Express App
const app: Application = express();

// cors rules
app.use(cors());

// helmet rules
app.use(helmet());

// Add 404 handler
app.all('*', async (req: Request): Promise<void> => {
  logger(`route ${req.url} does not exist. `);
  throw new NotFoundError();
});

// Add error handling
app.use(errorHandler);

// Export app
export { app };
