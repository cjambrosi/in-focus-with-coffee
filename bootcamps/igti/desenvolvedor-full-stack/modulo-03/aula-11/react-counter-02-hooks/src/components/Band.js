import React, { useState } from 'react';

const BAND_NAME = 'Rush';
const BAND_MEMBERS = [
  {
    id: 1,
    name: 'Neil Peart',
    instrument: 'Bateria'
  },
  {
    id: 2,
    name: 'Alex Lifeson',
    instrument: 'Guitarra'
  },
  {
    id: 3,
    name: 'Geddy Lee',
    instrument: 'Baixo'
  }
];

export default function Band() {

  // BAND_MEMBERS: valor inicial da aplicação
  const [bandMembers, setBandMembers] = useState(BAND_MEMBERS);
  const [bandName, setBandName] = useState(BAND_NAME);

  return (
    <div>
      <h4>{bandName}</h4> 
      <ul>
      {bandMembers.map(({id, name, instrument}) => {
        return (
          <li key={id}>{name} - {instrument}</li>
        );
      })}
      </ul>
    </div>
  );
}
