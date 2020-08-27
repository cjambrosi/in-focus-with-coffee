import express from 'express';
import mongoose from 'mongoose';
import studentRouter from './routes/studentRouter.js'

const app = express();

app.use(express.json());
app.use(studentRouter);

app.listen(3000, () => console.log('API Iniciada!'));