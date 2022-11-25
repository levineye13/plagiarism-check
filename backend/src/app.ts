import express, { Express } from 'express';
import cookieParser from 'cookie-parser';

import { postgresStart } from './db';
import router from './routes';

const app: Express = express();

const port = 3000;
const host = 'localhost';

app.use(cookieParser());
app.use(router);

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
