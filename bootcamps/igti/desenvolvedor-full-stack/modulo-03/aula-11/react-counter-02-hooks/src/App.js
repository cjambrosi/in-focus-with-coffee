import React, { Fragment, useState } from 'react';
import Counter from './components/Counter/Counter';
import Counter2 from './components/Counter/Counter2';
import Band from './components/Band';

export default function App() {
  const [currentCounter, setCurrentCounter] = useState(3);
  const [steps, setSteps] = useState(0);

  const handleCount = clickType => {
    const counter = (clickType === '+') ? currentCounter + 1 : currentCounter - 1;

    setCurrentCounter(counter);
    setSteps(steps + 1);

    // this.setState({
    //   currentCounter: (clickType === '+') ? currentCounter + 1 : currentCounter - 1,
    //   steps: steps + 1
    // });
  }

  return (
    <Fragment>
      <h3>Band</h3>
      <Band />
      <h3>Counter (Estados individuais)</h3>
      <Counter />
      <Counter />
      <Counter />
      <h3>Counter 2 (Estados compartilhados)</h3>
      <Counter2 
        onCount={handleCount} 
        countValue={currentCounter} 
        currentStep={steps} 
      />
      <Counter2 
        onCount={handleCount} 
        countValue={currentCounter} 
        currentStep={steps} 
      />
      <Counter2 
        onCount={handleCount} 
        countValue={currentCounter} 
        currentStep={steps} 
      />
    </Fragment>
  );
}
