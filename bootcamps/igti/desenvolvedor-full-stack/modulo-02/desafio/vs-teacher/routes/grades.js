import express from 'express';
import { promises } from 'fs';

const router = express.Router();

const readFile = promises.readFile;
const writeFile = promises.writeFile;

console.log('global.fileName', global.fileName);

router.post('/', async (req, res) => {
  let grade = req.body;

  console.log(grade);
  try {
    let json = JSON.parse(await readFile('grades.json', 'uf8'));

    grade = {
      id: json.nextId++,
      timestamp: new Date(),
      ...grade
    }

    json.grades.push(grade);
    await writeFile('grades.json', JSON.stringify(json));

    res.send(grade);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.put('/', async (req, res) => {
  let newGrade = req.body;

  try {
    let json = JSON.parse(await readFile('grades.json', 'uf8'));

    let index = json.grades.findIndex(grade => grade.id === newGrade.id);

    if (newGrade.student) {
      json.grades[index].student = newGrade.student;
    }
    
    if (newGrade.subject) {
      json.grades[index].subject = newGrade.subject;
    }

    if (newGrade.type) {
      json.grades[index].type = newGrade.type;
    }

    if (newGrade.value) {
      json.grades[index].value = newGrade.value;
    }

    await writeFile('grades.json', JSON.stringify(json));

    res.send(json.grades[index]);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

export default router;