import React, { Component } from 'react';
import InputFullSalary from './components/inputSalary/InputFullSalary';
import ProgressBarSalary from './components/progressiveBar/ProgressBarSalary';
import InputReadOnly from './components/inputSalaryCalculation/InputReadOnly';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      fullSalary: ''
    }
  }

  handleSalaryChange = newSalary => {
    this.setState({
      fullSalary: newSalary
    });
  }

  render() {
    const { fullSalary } = this.state;
    
    return (

      <div className="container">

        <div className="row">
          <div className="col s12 center">
            <h1>React Salário</h1>
          </div>
        </div>

        <InputFullSalary fullSalary={fullSalary} onChangeSalary={this.handleSalaryChange} />
        <ProgressBarSalary />
        <InputReadOnly fullSalary={fullSalary} />
        
      </div>
    );
  }
}
