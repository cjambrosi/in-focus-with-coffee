import express from 'express';
import { accountRouter } from './routes/accountRouter.js';
import { db } from './models/index.js';

(async () => {
  try {
    await db.mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log('Conexão com MongoDB estabelicidade com sucesso.');
  } catch (error) {
    console.log(`Não foi possível conectar-se ao MongoDB: ${error}`);
  }
})();

const app = express();
app.use(express.json());

app.use(accountRouter);

app.listen(3000, () => {
  console.log('API iniciada com sucesso!');
});