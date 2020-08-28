import { db } from '../models/index.js';

const Account = db.account;

const findAll = async (_, res) => {
  try {
    const data = await Account.find();

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(`Erro ao fazer consulta. ${error}`);
  }
}

const create = async (req, res) => {
  const account = new Account({
    agencia: req.body.agencia,
    conta: req.body.conta,
    name: req.body.name,
    balance: req.body.balance
  });

  try {
    const data = await account.save();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(`Não foi possível salvar os dados da nova conta. ${error}`);
  }
}

const accountDeposit = async (req, res) => {
  const accountNumber = req.params.account;

  try {
    const account = await Account.findOne({ conta: accountNumber });

    if (!account) {
      res.send(`Não encontrada à conta "${accountNumber}".`);
      return;
    }

    const { agencia, conta, value } = req.body;

    if (value <= 0) {
      res.send('Valor para depósito deve ser maior que zero.');
      return;
    }

    const saveAccount = await Account.findOneAndUpdate(
      { 
        agencia: agencia,
        conta: conta
      },
      { 
        $inc: { 
          balance: value 
        }
      },
      { 
        new: true 
      }
    );

    if (saveAccount) {
      res.status(200).send(`Novo saldo em conta: ${account.balance + value}`);
    } else {
      res.status(404).send("Conta ou agência não encontrados!");
    }
    
  
  } catch (error) {
    res.status(500).send(`Não foi possível registrar seu depósito. ${error}`);
  }
}

const accountWithdraw = async (req, res) => {
  const accounNumber = req.params.account;

  try {
    const account = await Account.findOne({ conta: accounNumber });

    if (!account) {
      res.status(400).send(`Aconta ${accountNumber} não foi encontrada.`);
      return;
    }

    const { agencia, conta, value } = req.body;

    if (value > (account.balance - 1)) {
      res.status(500).send('Saldo insuficiente para retirida');
      return;
    }

    const saveAccount = await Account.findOneAndUpdate(
      { 
        agencia: agencia,
        conta: conta,
        balance: {
          $gt: value
        }
      },
      { 
        $inc: { 
          balance: -value - 1 
        }
      },
      { 
        new: true 
      }
    );

    if (saveAccount) {
      res.status(200).send(`Novo saldo em conta: ${account.balance - value - 1}`);
    } else {
      res.status(404).send("Conta ou agência não encontrados!");
    }

  } catch (error) {
    res.status(500).send(`Erro ao realizar o saque. ${error}`);
  }
}

const checkBalance = async (req, res) => {
  const accountNumber = req.params.account;

  try {
    const account = await Account.findOne({ conta: accountNumber });
    const { conta, balance } = account;

    if (!account) {
      res.status(404).send('Conta não encontrada.');
      return;
    }
    
    res.status(200).send(`O saldo da conta ${conta} é: ${balance}`);
  } catch (error) {
    res.status(500).send(`Erro ao consultar o saldo da conta. ${error}`);
  }
}

const transferBetweenAccounts = async (req, res) => {
  const { fromAccount, toAccount, value } = req.body;
  
  if (value <= 0) {
    res.status(500).send('O valor para transferência deve ser maior que zero.');
    return;
  }

  let fare = 0;
  
  try {
    const sourceAccount = await Account.findOne({ conta: fromAccount });
    const targetAccount = await Account.findOne({ conta: toAccount });

    if (sourceAccount.agencia !== targetAccount.agencia) fare = 8;
    
    const updateSourceAccount = await Account.findOneAndUpdate(
      {
        agencia: sourceAccount.agencia,
        conta: sourceAccount.conta,
        balance: {
          $gt: value + fare
        }
      },
      {
        $inc: {
          balance: -value - fare
        }
      },
      {
        new: true
      }
    );

    if (!updateSourceAccount) {
      res.status(500).send(`Dados da conta "${sourceAccount.agencia}" não conferem. Ou saldo é insuficiente.`);
      return;
    }

    await Account.findOneAndUpdate(
      {
        agencia: targetAccount.agencia,
        conta: targetAccount.conta,
      },
      {
        $inc: {
          balance: value
        }
      },
      {
        new: true
      }
    );

    res.status(200).send(`Saldo na conta de origem "${fromAccount}" é: ${sourceAccount.balance - value - fare}`);    
  } catch (error) {
    res.status(500).send(`Houve erro ao realizar transferência.  ${error}`);
  }
}

const averageBalancePerAgency = async (req, res) => {
  const agency = req.params.agency;

  try {
    const accountsFromAgency = await Account.aggregate([
      {
        $match: {
          agencia: parseInt(agency)
        }
      },
      {
        $group: {
          _id: '$agencia',
          avgAmount: {
            $avg: '$balance'
          }
        }
      }
    ]);

    if (accountsFromAgency.length === 0) {
      res.status(404).send(`Agência "${agency}" não encontrada.`);
      return;
    }

    res.send(`Média de saldo das contas referente a agência "${agency}" é de: ${accountsFromAgency[0].avgAmount}`);
  } catch (error) {
    res.status(500).send(`Erro ao consultar a média de saldo das contas da agência. ${error}`);
  }
}

const lowestAccountBalance = async (req, res) => {
  const limit = req.params.limit;

  try {
    const accounts = await Account.find(
      {},
      {
        _id: 0,
        name: 0
      }
    )
    .limit(Number(limit))
    .sort({
      balance: 1
    });

    res.status(200).send(accounts);
  } catch (error) {
    res.status(500).send(`Erro ao consultar clientes. ${error}`);
  }
}

const highestAccountBalance = async (req, res) => {
  const { limit } = req.params;

  try {
    const accounts = await Account.find(
      {},
      {
        _id: 0,
      }
    )
    .limit(Number(limit))
    .sort({
      balance: -1,
      name: 1
    });
    
    res.status(200).send(accounts);
  } catch (error) {
    res.status(500).send(`Erro ao consultar clientes. ${error}`);
  }
}

const transferCustomer = async (req, res) => {
  
  try {
    const agencies = await Account.distinct('agencia');
    const accounts = await Account.find({});
    const privateAgency = 99;
    let biggestAccount = [];
    let biggestBalance = 0;
    let biggest = [];

    agencies.forEach(agency => {

      accounts.forEach(account => {
        const { agencia, balance } = account;

        if (balance > biggestBalance && agencia === agency) {
          biggestBalance = balance;
          biggest = account;
        }
      });

      biggestAccount.push(biggest);
    });

    console.log(biggestAccount);

    biggestAccount.forEach(async account => {
      const { _id } = account;
      
      await Account.findOneAndUpdate(
        {
          _id: _id
        },
        {
          agencia: privateAgency
        },
        {
          new: true
        }
      );

    });

    const accountFromPrivateAgency = await Account.find({ 
      agencia: privateAgency 
    })
    .sort({ 
      balance: -1 
    });

    res.status(200).send(accountFromPrivateAgency);
  } catch (error) {
    res.status(500).send(`Erro ao transferir conta. ${error}`);
  }
}

const remove = async (req, res) => {
  const account = req.params.account;
  const agency = req.body.agency;

  try {
    const data = await Account.findOneAndDelete(
      { 
        agencia: agency,
        conta: account
      }
    );

    if (data) {
      const countDocument = await Account.countDocuments({ agencia: agency });

      res.status(200).send(`Conta "${account}" excluída.\nQuantidade de contas ativas da agência ${agency} são: ${countDocument}`);
    } else {
      res.status(404).send(`Não encontrada a conta "${account}".`);
    }

  } catch (error) {
    res.status(500).send(`Não foi possível remover a conta. ${error}`);
  }
}

export default { 
  findAll,
  create,
  accountDeposit,
  accountWithdraw,
  checkBalance,
  transferBetweenAccounts,
  averageBalancePerAgency,
  lowestAccountBalance,
  highestAccountBalance,
  transferCustomer,
  remove
};