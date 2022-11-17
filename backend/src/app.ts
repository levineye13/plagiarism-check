import express, { Express } from 'express';

const app: Express = express();

const port = 3000;
const host = 'localhost';

app.listen(port, host, () => {
  console.log('started', port, host);
});
