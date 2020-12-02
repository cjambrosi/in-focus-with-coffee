import { db } from '../models/index.js';
import { logger } from '../config/logger.js';

const Student = db.student;

const create = async (req, res) => {

  if (!req.body) {
    return res.status(400).send({
      message: 'Dados para cadastro vazio',
    });
  }

  const { name, subject, type, value } = req.body;
  const grade = new Student({
    name: name,
    subject: subject,
    type: type,
    value: value,
    lastModified: new Date() 
  });

  try {
    const data = await grade.save();

    res.send({ message: 'Grade inserido com sucesso' });
    logger.info(`POST /grade - ${JSON.stringify()}`);
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Algum erro ocorreu ao salvar' });
    logger.error(`POST /grade - ${JSON.stringify(error.message)}`);
  }
};

const findAll = async (req, res) => {
  const name = req.query.name;

  //condicao para o filtro no findAll
  var condition = name
    ? { name: { $regex: new RegExp(name), $options: 'i' } }
    : {};

  try {
    const students = await Student.find(condition);

    if (students.length === 0) {
      return res.status(404).send('Nada foi encontrado');
    }

    res.status(200).send(students);
    logger.info(`GET /grade`);
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Erro ao listar todos os documentos' });
    logger.error(`GET /grade - ${JSON.stringify(error.message)}`);
  }
};

const findOne = async (req, res) => {
  const id = req.params.id;

  console.log(id);

  try {
    const student = await Student.findOne({ _id: id });

    if (!student) {
      res.status(404).send('Estudante não encontado');
      return;
    }

    res.status(200).send(student);

    logger.info(`GET /grade - ${id}`);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao buscar o Grade id: ' + id });
    logger.error(`GET /grade - ${JSON.stringify(error.message)}`);
  }
};

const update = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Dados para atualizacao vazio',
    });
  }

  const id = req.params.id;

  try {
    const { name, subject, type, value } = req.body;

    const saveData = await Student.findOneAndUpdate(
      {
        _id: id
      },
      {
        name: name,
        subject: subject,
        type: type,
        value: value,
        lastModified: new Date()
      },
      {
        new: true
      }
    );
    
    if (saveData) {
      res.status(200).send(`Atualização concluída com sucesso: ${saveData}`);
    } else {
      res.status(500).send('Não foi possível atualizar.');
    }

    logger.info(`PUT /grade - ${id} - ${JSON.stringify(req.body)}`);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao atualizar a Grade id: ' + id });
    logger.error(`PUT /grade - ${JSON.stringify(error.message)}`);
  }
};

const remove = async (req, res) => {
  const id = req.params.id;

  try {
    console.log('Delete', id);
    const deleteStudent = await Student.findByIdAndDelete(id);

    if (deleteStudent) {
      res.status(200).send(`Excluído com sucesso: ${deleteStudent}`);
    } else {
      res.status(500).send('Não foi possível excluir. Estudante não encontrado.');
    }

    logger.info(`DELETE /grade - ${id}`);
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Nao foi possivel deletar o Grade id: ' + id });
    logger.error(`DELETE /grade - ${JSON.stringify(error.message)}`);
  }
};

const removeAll = async (req, res) => {
  try {
    await Student.deleteMany({});

    res.status(200).send('Todos estudantes excluídos com sucesso!');
    logger.info(`DELETE /grade`);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao excluir todos as Grades' });
    logger.error(`DELETE /grade - ${JSON.stringify(error.message)}`);
  }
};

export default { create, findAll, findOne, update, remove, removeAll };
