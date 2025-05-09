import axios from 'axios';

const API_URL = 'http://localhost:3001/grade';

// Validar a nota
const GRADE_VALIDATION = [
  {
    id: 1,
    gradeType: 'Exercícios',
    minValue: 0,
    maxValue: 10
  },
  {
    id: 2,
    gradeType: 'Trabalho Prático',
    minValue: 0,
    maxValue: 40
  },
  {
    id: 3,
    gradeType: 'Desafio',
    minValue: 0,
    maxValue: 50
  }
];

async function getAllGrades() {
  const res = await axios.get(API_URL);
  const grades = res.data.grades.map(grade => {
    const { student, subject, type } = grade;

    return {
      ...grade,
      studentLowerCase: student.toLowerCase(),
      subjectLoweCase: subject.toLowerCase(),
      typeLowerCase: type.toLowerCase(),
      isDeleted: false // Para exclusão lógica
    }
  });

  let allStudents = new Set(); // Estrutura que simula conjuto e uma característica dos conjuntos, é que os elementos não podem se repetir.
  grades.forEach(grade => allStudents.add(grade.student)); // O Set() vai verificar automaticamente se o aluno já está cadastrado, caso sim, ele vai descartar (Pode não ser 100% confiável, por exemplo, alunos homônimos).
  allStudents = Array.from(allStudents);

  let allSubjectis = new Set();
  grades.forEach(grade => allSubjectis.add(grade.subject));
  allSubjectis = Array.from(allSubjectis);

  let allGradeTypes = new Set();
  grades.forEach(grade => allGradeTypes.add(grade.type));
  allGradeTypes = Array.from(allGradeTypes);

  let maxId = -1;
  grades.forEach(({ id }) => {
    if (id > maxId) {
      maxId = id;
    }
  });

  let nextId = maxId + 1;
  const allCombinations = [];

  allStudents.forEach(student => {
    allSubjectis.forEach(subject => {
      allGradeTypes.forEach(type => {
        allCombinations.push({
          student,
          subject,
          type
        });
      });
    });
  });

  allCombinations.forEach(({ student, subject, type }) => {
    const hasItem = grades.find(grade => {
      return (
        grade.subject === subject && 
        grade.student === student && 
        grade.type === type
      );
    });

    if (!hasItem) {
      grades.push({
        id: nextId++,
        student,
        studentLowerCase: student.toLowerCase(),
        subject,
        subjectLoweCase: subject.toLowerCase(),
        type,
        typeLowerCase: type.toLowerCase(),
        value: 0,
        isDeleted: true
      });
    }
  });

  // No sort(), a ultima ordenação é a primeira ser mostrada
  grades.sort((a, b) => a.typeLowerCase.localeCompare(b.typeLowerCase));
  grades.sort((a, b) => a.subjectLoweCase.localeCompare(b.subjectLoweCase));
  grades.sort((a, b) => a.studentLowerCase.localeCompare(b.studentLowerCase));

  return grades;
}

async function insertGrade(grade) {
  const response = await axios.post(API_URL, grade);
  return response.data.id;
}

async function updateGrade(grade) {
  const response = await axios.put(API_URL, grade);
  return response.data;
}

async function deleteGrade(grade) {
  const response = await axios.delete(`${API_URL}/${grade.id}`);
  return response.data;
}

async function getValidationFromGradeType(gradeType) {
  const gradeValidation = GRADE_VALIDATION.find(item => item.gradeType === gradeType);
  const { minValue, maxValue } = gradeValidation;

  return {
    minValue,
    maxValue
  };
}

export { getAllGrades, insertGrade, updateGrade, deleteGrade, getValidationFromGradeType };