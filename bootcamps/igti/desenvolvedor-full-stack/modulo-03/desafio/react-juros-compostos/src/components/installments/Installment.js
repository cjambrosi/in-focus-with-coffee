import React from 'react';
import css from './installments.module.css';

const installmentBlock = `col s6 m2 ${css.flexRowBlock} ${css.borderBlock}`;

export default function Installment(props) {
  const { amount, appliedPeriod, percentage, yieldValue } = props;

  return (
    <div className="card">
      <b>{appliedPeriod}</b>
      <div className={css.taxesBlock}>
        {yieldValue >= 0 ? (
          <p className={css.yieldText}>R$ {amount}</p>
        ) : (
          <p className={css.devaluesText}>R$ {amount}</p>
        )}

        {yieldValue >= 0 ? (
          <p className={css.yieldText}>R$ {yieldValue}</p>
        ) : (
          <p className={css.devaluesText}>-R$ {yieldValue * -1}</p>
        )}

        {percentage >= 0 ? (
          <p className={css.yieldTaxes}>{percentage}%</p>
        ) : (
          <p className={css.devaluesTaxes}>{percentage}%</p>
        )}
      </div>
    </div>
  );
}
