import React, { useState, useEffect } from 'react';
import { getNewTimestamp } from './helpers/dateTimeHelpers';

export default function App() {
  // Variável que será monitorada e a função que irá trocar o valor da variável
  // useState é um Hook
  const [clickArray, setClickArray] = useState([]);

  // Hool
  useEffect(() => {
    document.title = clickArray.length;
  });

  const handleClick = () => {
    // Object.assign: Cria uma cópia, não manipula o estado original
    const newClickArray = Object.assign([], clickArray);
    newClickArray.push(getNewTimestamp());

    setClickArray(newClickArray);
  };

  return (
    <div>
      <h1>
        React e <em>Hooks</em>
      </h1>

      <button onClick={handleClick}>Clique aqui</button>

      <ul>
        {clickArray.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
