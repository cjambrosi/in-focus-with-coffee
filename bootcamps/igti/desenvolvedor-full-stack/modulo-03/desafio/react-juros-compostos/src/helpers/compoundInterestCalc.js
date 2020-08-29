// prettier-ignore
const accruedInterest = (initialCapital, monthlyInterestRate, appliedPeriod) => {
  const newValues = [];
  let percentage = 0;
  let interestPerPeriod = 0;
  let amount = 0;
  let yieldValue = 0;

  for (let i = 1; i <=appliedPeriod; i++) {
    interestPerPeriod = (1 + monthlyInterestRate / 100) ** i;
    amount = initialCapital * interestPerPeriod;
    
    yieldValue = (initialCapital * interestPerPeriod) - initialCapital;
    percentage = ((amount / initialCapital - 1) * 100);

    newValues.push({
      amount: amount.toFixed(2),
      appliedPeriod: i,
      yieldValue: yieldValue.toFixed(2),
      percentage: percentage.toFixed(2)
    })
  }

  return newValues;

};

export { accruedInterest };
