// Import packages
import cors from 'cors';
import debug from 'debug';
import helmet from 'helmet';
import express, { Request, Response } from 'express';

// Import middlewares
import { errorHandler } from './middlewares';

// Import errors
import { NotFoundError } from './errors';

// Create debug logger
const logger = debug('backend:request');

// Log initialization
logger('Initializing app...');

// Create Express App
const app = express();

// cors rules
app.use(cors());

// helmet rules
app.use(helmet());

// Add 404 handler
app.all('*', async (req: Request, res: Response) => {
  logger(`route ${req.url} does not exist. `);
  res.status(404).json({ error: 'route does not exist' });
});

// Add error handling
app.use(errorHandler);

// Export app
export { app };
