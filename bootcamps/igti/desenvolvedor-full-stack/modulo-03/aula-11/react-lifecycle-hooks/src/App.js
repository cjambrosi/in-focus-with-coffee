'use strict';

import React, { useState, useEffect } from 'react';
import Users from './components/users/Users';
import Toggle from './components/toggle/Toggle';

export default function App() {
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);

  // Substitui componentDidMount()
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('https://randomuser.me/api/?seed=rush&nat=br&results=10');
      const json = await res.json();

      setUsers(json.results);
    };

    fetchUsers();
  }, []);

  // Lugar muito bom para colocar requisições HTTP, pois vai ser executado somente uma vez o componente
  // async componentDidMount() {
  //   console.log('componentDidMount de App.js');

  //   const res = await fetch('https://randomuser.me/api/?seed=rush&nat=br&results=10');
  //   const json = await res.json();

  //   console.log(json);

  //   this.setState({
  //     users: json.results
  //   });
  // }

  const handleShowUsers = isChecked => {
    console.log('handleShowUsersEVENT', isChecked);
    setShowUsers(isChecked);
  }

  return (
    <div>
      <h3>React LifeCycle</h3>
      <Toggle description="Mostrar usuários: " inabled={showUsers} onToggle={handleShowUsers} />

      <hr />
      {/* Se isso foi verdadeiro, mostre isso */}
      { showUsers && <Users users={users} /> }

      {/* Se houve condição para false, usuaria operador ternário */}
      {/* { showUsers ? <div>Users</div> : <div>Não posso mostrar nada</div> } */}
    </div>
  );
}