import React, { Component } from 'react';

// Maneira de importar quando não é padrão
import { getNewTimestamp } from './helpers/dateTimeHelpers';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      clickArray: [],
    };
  }

  handleClick = () => {
    // Object.assign: Cria uma cópia, não manipula o estado original
    const newClickArray = Object.assign([], this.state.clickArray);
    newClickArray.push(getNewTimestamp());

    // Substitui o estado antigo, pelo estado atual. Regra de imutabilidade
    this.setState({ clickArray: newClickArray });
  };

  componentDidUpdate() {
    document.title = this.state.clickArray.length.toString();
  }

  render() {
    const { clickArray } = this.state;

    return (
      <div>
        <h1>
          React e <em>Class Components</em>
        </h1>

        <button onClick={this.handleClick}>Clique aqui</button>

        <ul>
          {clickArray.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}
