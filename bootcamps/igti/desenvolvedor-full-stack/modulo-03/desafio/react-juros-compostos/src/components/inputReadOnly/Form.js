import React, { useState, useEffect } from 'react';

export default function TaxesInput({
  onChangeInitialMount,
  onChangeMonthlyInterestRate,
  onChangePeriods,
}) {
  const [initialAmount, setInitialAmount] = useState('');
  const [monthlyInterestRate, setMonthlyInterestRate] = useState('');
  const [periods, setPeriods] = useState('');

  useEffect(() => {
    onChangeInitialMount(initialAmount);
  }, [initialAmount, onChangeInitialMount]);

  useEffect(() => {
    onChangeMonthlyInterestRate(monthlyInterestRate);
  }, [monthlyInterestRate, onChangeMonthlyInterestRate]);

  useEffect(() => {
    onChangePeriods(periods);
  }, [periods, onChangePeriods]);

  const handleInputInitialAmount = (event) => {
    let parsedValue = +event.target.value;
    setInitialAmount(parsedValue);
  };

  const handleInputMonthlyInterestRate = (event) => {
    let parsedValue = +event.target.value;
    setMonthlyInterestRate(parsedValue);
  };

  const handleInputperiods = (event) => {
    let parsedValue = +event.target.value;
    setPeriods(parsedValue);
  };

  return (
    <div className="row">
      <div className="col s12 m4">
        <div className="input-field">
          <input
            id="initialAmount"
            className="active validade"
            type="number"
            min="0"
            max="100000"
            step="100"
            value={initialAmount}
            onChange={handleInputInitialAmount}
          />
          <label htmlFor="initialAmount">Montante inicial:</label>
          <small>Valores de 1 à 100.000 (inclusive).</small>
        </div>
      </div>

      <div className="col s12 m4">
        <div className="input-field">
          <input
            id="monthlyInterestRate"
            className="active validade"
            type="number"
            min="-12"
            max="12"
            step="0.1"
            value={monthlyInterestRate}
            onChange={handleInputMonthlyInterestRate}
          />
          <label htmlFor="monthlyInterestRate">Taxa de juros mensal:</label>
          <small>Valores de -12 à 12 (inclusive).</small>
        </div>
      </div>

      <div className="col s12 m4">
        <div className="input-field">
          <input
            id="periods"
            className="active validade"
            type="number"
            min="1"
            max="36"
            step="1"
            value={periods}
            onChange={handleInputperiods}
          />
          <label htmlFor="periods">Periodo (meses):</label>
          <small>Valores de 1 à 36 (inclusive).</small>
        </div>
      </div>
    </div>
  );
}
