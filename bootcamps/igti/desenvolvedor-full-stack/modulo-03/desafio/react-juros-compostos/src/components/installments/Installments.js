import React from 'react';
import Installment from './Installment';
import css from './installments.module.css';

const installmentBlock = `col s6 m2 ${css.flexRowBlock}`;

export default function Installments({ installmentsValue }) {
  console.log(installmentsValue);
  return (
    <div>
      {installmentsValue.map(
        ({ amount, appliedPeriod, yieldValue, percentage }) => {
          return (
            <div className={installmentBlock} key={appliedPeriod}>
              <Installment
                amount={amount}
                appliedPeriod={appliedPeriod}
                yieldValue={yieldValue}
                percentage={percentage}
              />
            </div>
          );
        }
      )}
    </div>
  );
}
