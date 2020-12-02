import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import { gradeRouter } from './routes/gradeRouter.js';
import { db } from './models/index.js';

dotenv.config();

(async () => {
  try {
    await db.mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Conexão com MongoDB estabelicidade com sucesso.');
  } catch (error) {
    console.log(`Não foi possível conectar-se ao MongoDB: ${error}`);
    process.exit();
  }
})();

const app = express();

//define o dominio de origem para consumo do servico
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: 'https://grade-app-cja.herokuapp.com/',
  })
);

app.get('/', (req, res) => {
  res.send('API em execucao');
});

app.use(gradeRouter);

app.listen(process.env.PORT || 8081, () => {});
