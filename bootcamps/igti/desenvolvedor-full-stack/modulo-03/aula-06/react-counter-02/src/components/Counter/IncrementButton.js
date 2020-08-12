import React, { Component } from 'react'

export default class IncrementButton extends Component {
  
  handleButtonClick = () => {
    this.props.onIncriment('+');
  }

  render() {
    // Props, o que é passado para o componente
    console.log(this.props);

    return (
      <button
        onClick={this.handleButtonClick}
        className="waves-effect waves-light btn green darken-4"
      >
      +
      </button>
    )
  }
}
