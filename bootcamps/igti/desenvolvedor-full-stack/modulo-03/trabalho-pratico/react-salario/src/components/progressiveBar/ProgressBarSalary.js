import React, { Component } from 'react';
import css from './progresseBar.module.css';

export default class ProgressBarSalary extends Component {
  render() {
    const {
      discountINSSPercent,
      discountIRPFPercent,
      netSalaryPercent,
    } = this.props.salaryObj;

    return (
      <div className="row">
        <div className="col s12">
          <div className={css.progressiveBar}>
            <div
              className={css.inssSalary}
              style={{ width: `${discountINSSPercent}%` }}
            ></div>
            <div
              className={css.irpfSalary}
              style={{ width: `${discountIRPFPercent}%` }}
            ></div>
            <div
              className={css.netSalary}
              style={{ width: `${netSalaryPercent}%` }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}
