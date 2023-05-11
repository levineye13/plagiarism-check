import express, { Express } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { postgresStart } from './db';
import router from './routes';
import {
  networkErrorHandler,
  sequelizeErrorHandler,
  errorHandler,
} from './middlewares';
import { corsConfig } from './utils/constants';

const app: Express = express();

const port = 3000;
const host = 'localhost';

app.use(cookieParser());
app.use(express.json());
app.use(cors(corsConfig));
app.use(router);
app.use(networkErrorHandler);
app.use(sequelizeErrorHandler);
app.use(errorHandler);

const startApp = async (): Promise<void> => {
  try {
    postgresStart();

    app.listen(port, host, () => {
      console.log('started', port, host);
    });
  } catch (e) {
    console.error(e);
  }
};

startApp();
