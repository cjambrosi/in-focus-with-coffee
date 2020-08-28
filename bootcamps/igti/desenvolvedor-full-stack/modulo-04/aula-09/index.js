/**
 * Exemplo de conexão com o Clound MongoDB
 * 
 * https://mongoosejs.com/
 * 
 * npm install mongoose
**/

import mongoose from 'mongoose';

const DATA_BASE = 'grades';
const PASSWORD = '';
// const URL = `mongodb://localhost/${DATA_BASE}`;
const URL = ``;

// Conectar ao MongoDB pelo Mongoose
(async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch (error) {
    console.log(error);
  }
}) ();

// Criação do modelo
const studentSchema = mongoose.Schema({
  name: {
    type: String, // Or | Number | Date | Object
    require: true // Or false
  },
  subject: {
    type: String,
    require: true
  },
  type: {
    type: String,
    require: true
  },
  value: {
    type: Number,
    require: true
  },
  lastModified: {
    type: Date,
    default: Date.now
  }
});

// Definir para a coleção qual o modela dela
mongoose.model('student', studentSchema, 'student');

// Obtendo a estrutura da coleção
const student = mongoose.model('student');

new student({
  name: "Paulo Assis",
  subject: "Matematica",
  type: "Trabalho Prático",
  value: 22
}).save().then(() => {
  console.log("Documento inserido");
}).catch(err => {
  console.log("Falha ao inserir documento" + err);
});
