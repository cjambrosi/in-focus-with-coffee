import express from 'express';
import { promises as fs } from 'fs';

const { readFile, writeFile } = fs;

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    let account = req.body;

    // Se balance for igual a 0, tem que deixar salvar, pois se fizer !balance, vai tornar o 0 false.
    if (!account.name || account.balance === null) {
      throw new Error('Name e Balance são obrigatórios!');
    }

    const data = JSON.parse(await readFile(global.fileName));

    account = {
      id: data.nextId++,
      name: account.name,
      balance: account.balance,
    };

    data.accounts.push(account);

    await writeFile(global.fileName, JSON.stringify(data, null, 2));

    res.send(account);
    global.logger.info(`POST /account - ${JSON.stringify(account)}`);
  } catch (err) {
    // res.status(400).send({ err: err.message });
    next(err);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const data = JSON.parse(await readFile(global.fileName));
    delete data.nextId;
    res.send(data);

    global.logger.info('GET /account');
  } catch (err) {
    // res.status(400).send({ err: err.message });
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const data = JSON.parse(await readFile(global.fileName));
    const account = data.accounts.find(
      (account) => account.id === parseInt(req.params.id)
    );

    res.send(account);

    global.logger.info('GET /account/:id');
  } catch (err) {
    // res.status(400).send({ err: err.message });
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const data = JSON.parse(await readFile(global.fileName));
    data.accounts = data.accounts.filter(
      (account) => account.id !== parseInt(req.params.id)
    );

    await writeFile(global.fileName, JSON.stringify(data, null, 2));
    res.end();

    global.logger.info(`DELETE /account/:id - ${req.params.id}`);
  } catch (err) {
    // res.status(400).send({ err: err.message });
    next(err);
  }
});

// Atualizações Integrais
router.put('/', async (req, res, next) => {
  try {
    let account = req.body;

    if (!account.id || !account.name || account.balance === null) {
      throw new Error('Id, Name e Balance são obrigatórios!');
    }

    const data = JSON.parse(await readFile(global.fileName));
    const index = data.accounts.findIndex((item) => item.id === account.id);

    if (index === -1) {
      throw new Error('Registro não encontrado!');
    }

    data.accounts[index].name = account.name;
    data.accounts[index].balance = account.balance;

    await writeFile(global.fileName, JSON.stringify(data, null, 2));
    res.send(account);

    global.logger.info(`PUT /account - ${JSON.stringify(account)}`);
  } catch (err) {
    // res.status(400).send({ err: err.message });
    next(err);
  }
});

// Atualizações Parciais
router.patch('/updateBalance', async (req, res, next) => {
  try {
    let account = req.body;
    const data = JSON.parse(await readFile(global.fileName));
    const index = data.accounts.findIndex((item) => item.id === account.id);

    if (!account.id || account.balance === null) {
      throw new Error('Id e Balance são obrigatórios!');
    }

    if (index === -1) {
      throw new Error('Registro não encontrado!');
    }

    data.accounts[index].balance = account.balance;

    await writeFile(global.fileName, JSON.stringify(data, null, 2));
    res.send(data.accounts[index]);

    global.logger.info(
      `PATCH /account/updateBalance - ${JSON.stringify(account)}`
    );
  } catch (err) {
    // res.status(400).send({ err: err.message });
    next(err);
  }
});

// Forma genérica de tratar erros, ao invés de só repetir o uso  Try Catch
router.use((err, req, res, next) => {
  global.logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});

export default router;
