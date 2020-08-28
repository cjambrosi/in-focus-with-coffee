import mongoose from 'mongoose';
import accountModel from './accountModel.js';

const db = {};

db.user = '';
db.password = '';
db.dbName = '';
db.url = `mongodb+srv://${db.user}:${db.password}@bootcamp.nnzaq.mongodb.net/${db.dbName}?retryWrites=true&w=majority`;
db.mongoose = mongoose;
db.account = accountModel(mongoose);

export { db };