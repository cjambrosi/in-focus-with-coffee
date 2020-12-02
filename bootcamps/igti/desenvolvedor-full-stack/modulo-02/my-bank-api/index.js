import express from 'express';
import winston from 'winston';
import accountsRouter from './routes/accounts.js';
import { promises as fs } from 'fs';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocument } from './doc.js';

const { readFile, writeFile } = fs;

const { combine, timestamp, label, printf } = winston.format;

const myFormat = printf((level, message, label, timestamp) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

global.fileName = 'accounts.json';
global.logger = winston.createLogger({
  level: 'silly',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'my-bank-api.log' }),
  ],
  format: combine(label({ label: 'my-bank-api' }), timestamp(), myFormat),
});

const app = express();
app.use(express.json());

// Definir uso de forma Global
app.use(cors());
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/account', accountsRouter);

app.listen(3080, async () => {
  try {
    await readFile(global.fileName);
    global.logger.info('API Started');
  } catch (error) {
    const initialJson = {
      nextId: 1,
      accounts: [],
    };

    writeFile(global.fileName, JSON.stringify(initialJson))
      .then(() => {
        global.logger.info('API Started and FIle Created');
      })
      .catch((err) => {
        global.logger.error(err);
      });
  }
});
