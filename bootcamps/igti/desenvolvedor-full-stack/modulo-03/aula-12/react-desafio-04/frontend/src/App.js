import React, { useState, useEffect } from 'react';
import * as api from './api/apiService';
import Spinner from './components/Spinner';
import GradesControl from './components/GradesControl';
import ModalGrade from './components/ModalGrade';

export default function App() {
  const [allGrades, setAllGrades] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getGrades = async () => {
      const grades = await api.getAllGrades();
      setTimeout(() => {
        setAllGrades(grades);
      }, 1500);
    }

    getGrades();

    // api.getAllGrades().then(grades => {
    //   setTimeout(() => {
    //     setAllGrades(grades);
    //   }, 2000);
    // });
  }, []);

  const handlePersist = gradeToPersist => {
    console.log('PersistingId:', gradeToPersist);

    setSelectedGrade(gradeToPersist);
    setIsModalOpen(true);
  }

  const handlePersistData = async formData => {
    console.log('handlePersistDataFormData', formData);

    const { id, newValue } = formData;
    const newGrades = Object.assign([], allGrades);
    
    const gradeToPersist = newGrades.find(grade => grade.id === id);
    gradeToPersist.value = newValue;

    if (gradeToPersist.isDeleted) {
      gradeToPersist.isDeleted = false;
      await api.insertGrade(gradeToPersist);
    } else {
      await api.updateGrade(gradeToPersist);
    }

    setIsModalOpen(false);
  }

  const handleClose = () => {
    setIsModalOpen(false);
  }

  const handleDelete = async gradeToDelete => {
    console.log('DeletingId:', gradeToDelete);

    const isDeleted = api.deleteGrade(gradeToDelete);

    if (isDeleted) {
      const deletedGradeIndex = allGrades.findIndex(grade => grade.id === gradeToDelete.id);
      const newGrades = Object.assign([], allGrades);
      newGrades[deletedGradeIndex].isDeleted = true;
      newGrades[deletedGradeIndex].value = 0;
  
      setAllGrades(newGrades);
    }
  }

  return (
    <div>
      <h1 className="center">Controle de Notas</h1>
      
      {allGrades.length === 0 && <Spinner />}
      {allGrades.length > 0 && (<GradesControl grades={allGrades} onDelete={handleDelete} onPersist={handlePersist} />)}
      {isModalOpen && <ModalGrade onSave={handlePersistData} onClose={handleClose} selectedGrade={selectedGrade} />}
    </div>
  )
}
