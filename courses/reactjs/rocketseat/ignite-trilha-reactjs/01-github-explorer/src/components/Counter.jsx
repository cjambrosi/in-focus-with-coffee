import { useState } from 'react';

export function Counter() {
  // let = let it change

  const [counter, setCounter] = useState(0); // O use state retorna dois valores em formato de Array, por isso usar Atribuição via Desestruturação

  function increment() {
    setCounter(counter + 1); // Por causa da imutabilidade não é: counter++ ou counter += 1;
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  )
}