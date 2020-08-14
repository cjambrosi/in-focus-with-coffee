import React, { Component } from 'react'

export default class InputFullSalary extends Component {

  handleInputChange = event => {
    const newSalary = event.target.value;
    this.props.onChangeSalary(newSalary);
  }

  render() {
    const { fullSalary } = this.props;

    return (
      <div className="row">
        <div className="input-field col s12 offset-m4 m4">
          <input id="salary_base" type="number" value={fullSalary} onChange={this.handleInputChange} />
          <label htmlFor="salary_base">Salário Base</label>
        </div>
      </div>
    )
  }
}
