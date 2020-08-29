import React, { useState, useEffect } from 'react';
import Title from './components/header/Title';
import Form from './components/inputReadOnly/Form';
import Installments from './components/installments/Installments';
import { accruedInterest } from './helpers/compoundInterestCalc';

export default function App() {
  const [initialCapital, setInitialCapital] = useState(0);
  const [monthlyInterestRate, setMonthlyInterestRate] = useState(0);
  const [appliedPeriod, setAppliedPeriod] = useState(0);
  const [installmentsValue, setInstallmentsValue] = useState({});

  useEffect(() => {
    const isValid = () => {
      return (
        initialCapital <= 100000 &&
        initialCapital > 0 &&
        monthlyInterestRate <= 12 &&
        monthlyInterestRate >= -12 &&
        appliedPeriod <= 36 &&
        appliedPeriod > 0
      );
    };

    if (isValid()) {
      setInstallmentsValue(
        accruedInterest(initialCapital, monthlyInterestRate, appliedPeriod)
      );
    }
  }, [initialCapital, monthlyInterestRate, appliedPeriod]);

  const handleInitialMount = (capital) => {
    setInitialCapital(capital);
  };

  const handleMonthlyInterestRate = (rate) => {
    setMonthlyInterestRate(rate);
  };

  const handlePeriods = (month) => {
    setAppliedPeriod(month);
  };

  return (
    <div className="content">
      <Title />
      <Form
        onChangeInitialMount={handleInitialMount}
        onChangeMonthlyInterestRate={handleMonthlyInterestRate}
        onChangePeriods={handlePeriods}
      />
      <div className="row">
        {installmentsValue.length > 0 && (
          <Installments installmentsValue={installmentsValue} />
        )}
      </div>
    </div>
  );
}
