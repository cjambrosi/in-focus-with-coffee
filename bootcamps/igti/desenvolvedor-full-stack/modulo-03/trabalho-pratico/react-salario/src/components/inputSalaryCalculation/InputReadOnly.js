import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { formatNumber } from '../../helpers/formatHelpers';
import { calculateSalaryFrom } from '../../helpers/salary';

export default class InputReadOnly extends Component {

  componentDidUpdate = () => {
    M.updateTextFields();
  }

  render() {
    const { fullSalary } = this.props;

    let inputValue = calculateSalaryFrom(fullSalary);
    console.log(inputValue);

    return (
      <div className="row">
        <div className="input-field col s12 m3">
          <input id="inss_base" style={styles.inputBaseInss} type="text" value={formatNumber(inputValue.baseINSS)} disabled />
          <label className="active" htmlFor="inss_base">Base INSS</label>
        </div>

        <div className="input-field col s12 m3">
          <input id="inss_discount" style={styles.inputDiscountInss} type="text" value={`${formatNumber(inputValue.discountINSS)} ()`} disabled />
          <label htmlFor="inss_discount">Desconto INSS</label>
        </div>

        <div className="input-field col s12 m3">
          <input id="irpf_base" style={styles.inputBaseIrpf} type="text" value={formatNumber(inputValue.baseIRPF)} disabled />
          <label htmlFor="irpf_base">Base IRPF</label>
        </div>

        <div className="input-field col s12 m3">
          <input id="irpf_discount" style={styles.inputDiscounIrpf} type="text" value={`${formatNumber(inputValue.discountIRPF)} ()`} disabled />
          <label htmlFor="irpf_discount">Desconto IRPF</label>
        </div>

        <div className="input-field col s12 m3">
          <input id="net_salary" style={styles.inputNetSalay} type="text" value={`${formatNumber(inputValue.netSalary)} ()`} disabled />
          <label htmlFor="net_salary">Salário Líquido</label>
        </div>
      </div>
    )
  }
}

const styles = {
  inputBaseInss: {
    color: '#000',
    fontWeight: '700'
  },
  inputDiscountInss: {
    color: '#e67e22',
    fontWeight: '700'
  },
  inputBaseIrpf: {
    color: '#000',
    fontWeight: '700'
  },
  inputDiscounIrpf: {
    color: '#c0392b',
    fontWeight: '700'
  },
  inputNetSalay: {
    color: '#16a085',
    fontWeight: '700'
  }
}
