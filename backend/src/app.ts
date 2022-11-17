import express, { Express } from 'express';

const app: Express = express();

const port: number = 3000;
const host: string = 'localhost';

app.listen(port, host, () => {
  console.log('started', port, host);
});
