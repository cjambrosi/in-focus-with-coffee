import React, { Component } from 'react'

export default class DecrementButton extends Component {
  handleButtonClick = () => {
    this.props.onDecrement('-');
  }

  render() {
    // Props, o que é passado para o componente
    console.log(this.props);

    return (
      <button
        onClick={this.handleButtonClick}
        className="waves-effect waves-light btn red darken-4"
      >
      -
      </button>
    )
  }
}
