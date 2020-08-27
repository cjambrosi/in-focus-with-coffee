/**
 * Exemplo de conexão com o Clound MongoDB
 * https://cloud.mongodb.com/
 * 
 * npm install mongodb
**/

const MongoClient = require('mongodb').MongoCliente;

const password = '';
const uri = ``;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const remoteCollection = 'grades';

client.connect(async err => {
  const collection = client.db(remoteCollection).collection('student');
  
  // Obtendo coleção
  const collection = await collection.find().toArray();
  console.log('collection', collection);

  // Busca documentos com subject = Historia
  const documents = await collection.find({
    subject: "Historia"
  }).toArray();
  console.log('documents', documents);

  // Obter a lista dos bancos no servidor 
  const dataBaseList = await client.db().admin().listDatabases(); // Igual ao comando show dbs
  console.log('Databases:');
  dataBaseList.databases.forEach(db => {
    console.log(` - ${db.name}`);
  });

  client.close();
});
