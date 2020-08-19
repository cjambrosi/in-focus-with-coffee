import React, { useState, useEffect } from 'react'
import User from './User';

export default function Users({ users }) {
  const [secondsVisible, setSecondsVisible] = useState(0);

  // Substitui componentWillUnmount()
  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsVisible(secondsVisible + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    }
  }, [secondsVisible]); // Quando isso altera, ele roda o ciclo de novo, se for passado [], ele só executa uma vez

  return (
    <div>
      <p>Componentes Users vísivel por {secondsVisible}</p>
      <ul>
        {
          users.map(user => {
            const { login } = user; 
            
            return (
              <li key={login.uuid} >
                <User user={user} />
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}
