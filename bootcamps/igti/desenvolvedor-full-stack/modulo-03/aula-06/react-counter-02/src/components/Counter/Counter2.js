import React, { Component } from 'react';

import css from './counter.module.css';
import IncrementButton from './IncrementButton';
import DecrementButton from './DecrementButton';
import Value from './Value';
import Steps from './Steps';

export default class Counter2 extends Component {
  handleButtonClick = clickType => {
    console.log('clickType', clickType);
    this.props.onCount(clickType);
  }

  render() {
    const {countValue, currentStep} = this.props;

    return (
      <div className={css.counterContainer}>
        <DecrementButton onDecrement={this.handleButtonClick} />
        
        <Value value={countValue} />
        
        <IncrementButton onIncriment={this.handleButtonClick} />
        
        <Steps currentStep={currentStep} />
      </div>
    );
  }
}
