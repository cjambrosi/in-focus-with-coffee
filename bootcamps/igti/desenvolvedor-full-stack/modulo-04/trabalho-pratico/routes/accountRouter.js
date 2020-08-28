import express from 'express';
import accountController from '../controllers/accountController.js';

const app = express();

app.post('/accounts', accountController.create);
app.put('/accounts/deposit/:account', accountController.accountDeposit);
app.put('/accounts/withdraw/:account', accountController.accountWithdraw);
app.put('/accounts/transferBtwAccounts', accountController.transferBetweenAccounts);
app.put('/accounts/transferCustomer', accountController.transferCustomer);
app.get('/accounts/averageBalancePerAgency/:agency', accountController.averageBalancePerAgency);
app.get('/accounts/lowestAccountBalance/:limit', accountController.lowestAccountBalance);
app.get('/accounts/highestAccountBalance/:limit', accountController.highestAccountBalance);
app.get('/accounts/checkBalance/:account', accountController.checkBalance);
app.get('/accounts', accountController.findAll);
app.delete('/accounts/:account', accountController.remove);

export { app as accountRouter };
