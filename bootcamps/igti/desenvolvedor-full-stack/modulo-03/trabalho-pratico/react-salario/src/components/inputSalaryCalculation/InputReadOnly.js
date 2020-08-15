import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

export default class InputReadOnly extends Component {
  componentDidUpdate = () => {
    M.updateTextFields();
  };

  render() {
    const { idInput, inputValue, title, styleInput } = this.props;

    return (
      <div className="input-field col s12 m3">
        <input
          id={idInput}
          style={styleInput}
          type="text"
          value={inputValue}
          disabled
        />
        <label className="active" htmlFor={idInput}>
          {title}
        </label>
      </div>
    );
  }
}
