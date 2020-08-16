import React, { Component } from 'react';
import Users from './components/users/Users';
import Toggle from './components/toggle/Toggle';

export default class App extends Component {

  constructor() {
    super();
    
    this.state = {
      users: [],
      showUsers: false
    };
  }

  // Lugar muito bom para colocar requisições HTTP, pois vai ser executado somente uma vez o componente
  async componentDidMount() {
    console.log('componentDidMount de App.js');

    const res = await fetch('https://randomuser.me/api/?seed=rush&nat=br&results=10');
    const json = await res.json();

    console.log(json);

    this.setState({
      users: json.results
    });
  }

  componentDidUpdate() {
    console.log('componentDidUpdate de App.js');
  }

  componentDidWillUnMount() {
    console.log('componentDidWillUnMount de App.js');
  }

  handleShowUsers = isChecked => {
    console.log('handleShowUsersEVENT', isChecked);
    this.setState({ showUsers: isChecked });
  }

  render() {
    const { showUsers, users } = this.state;
    return (
      <div>
        <h3>React LifeCycle</h3>
        <Toggle description="Mostrar usuários: " inabled={showUsers} onToggle={this.handleShowUsers} />

        <hr />
        {/* Se isso foi verdadeiro, mostre isso */}
        { showUsers && <Users users={users} /> }

        {/* Se houve condição para false, usuaria operador ternário */}
        {/* { showUsers ? <div>Users</div> : <div>Não posso mostrar nada</div> } */}
      </div>
    );
  }
}