import React, { Component } from 'react';
import InputFullSalary from './components/inputSalary/InputFullSalary';
import ProgressBarSalary from './components/progressiveBar/ProgressBarSalary';
import InputReadOnly from './components/inputSalaryCalculation/InputReadOnly';
import { calculateSalaryFrom } from './helpers/salary';
import { formatNumber } from './helpers/formatHelpers';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary: '',
    };
  }

  handleSalaryChange = (newSalary) => {
    this.setState({
      fullSalary: newSalary,
    });
  };

  render() {
    const { fullSalary } = this.state;
    let inputValue = calculateSalaryFrom(fullSalary);

    return (
      <div className="container">
        <div className="row">
          <div className="col s12 center">
            <h1>React Salário</h1>
          </div>
        </div>

        <InputFullSalary
          fullSalary={fullSalary}
          onChangeSalary={this.handleSalaryChange}
        />

        <ProgressBarSalary salaryObj={inputValue} />

        <div className="row">
          <InputReadOnly
            idInput={'inss_base'}
            inputValue={`${formatNumber(inputValue.baseINSS)}`}
            title={'Base INSS'}
            styleInput={styles.inputBaseInss}
          />

          <InputReadOnly
            idInput={'inss_discount'}
            inputValue={`${formatNumber(inputValue.discountINSS)} (${
              inputValue.discountINSSPercent
            }%)`}
            title={'Desconto INSS'}
            styleInput={styles.inputBaseInss}
          />

          <InputReadOnly
            idInput={'irpf_base'}
            inputValue={`${formatNumber(inputValue.baseIRPF)}`}
            title={'Base IRPF'}
            styleInput={styles.inputDiscountInss}
          />

          <InputReadOnly
            idInput={'irpf_discount'}
            inputValue={`${formatNumber(inputValue.discountIRPF)} (${
              inputValue.discountIRPFPercent
            }%)`}
            title={'Desconto IRPF'}
            styleInput={styles.inputDiscounIrpf}
          />

          <InputReadOnly
            idInput={'net_salary'}
            inputValue={`${formatNumber(inputValue.netSalary)} (${
              inputValue.netSalaryPercent
            }%)`}
            title={'Salário Líquido'}
            styleInput={styles.inputNetSalay}
          />
        </div>
      </div>
    );
  }
}

const styles = {
  inputBaseInss: {
    color: '#000',
    fontWeight: '700',
  },
  inputDiscountInss: {
    color: '#e67e22',
    fontWeight: '700',
  },
  inputBaseIrpf: {
    color: '#000',
    fontWeight: '700',
  },
  inputDiscounIrpf: {
    color: '#c0392b',
    fontWeight: '700',
  },
  inputNetSalay: {
    color: '#16a085',
    fontWeight: '700',
  },
};
