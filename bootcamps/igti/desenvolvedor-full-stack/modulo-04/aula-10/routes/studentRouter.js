import express from 'express';
import mongoose from 'mongoose';
import { studentModel } from '../modules/studentModule';


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

    console.log('Conectado ao MongoDB');
  } catch (error) {
    console.log('Erro ao conectar no MongoDB' + error);
  }
}) ();

const app = express();

// Create
app.post('/student', async (req, res) => {
  try {
    const student = new studentModel(req.body);
    await student.save();

    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Retrive
app.get('/student', async (req, res) => {
  try {
    const student = await studentModel.find({}); // Find All

    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update
app.patch('/student/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const student = await studentModel.findByIdAndUpdate({ _id: id }, req.body, { new: true }); // req.body: documento a ser atualizado | { new: true }, esta dizendo que quer que retorno o documento que está sendo atualizado

    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Delete
app.post('/student/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const student = await studentModel.findById({ _id: id });

    if (!student) {
      res.status(400).send('Documento não encontrado na coleção');
    } else {
      res.send(200).send();
    }

    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

export { app as studentRouter };