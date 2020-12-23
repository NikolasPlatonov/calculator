import React from 'react';
import '../App.css';

function Input(props) {
  return (
    <div className="input_container">
      <div className="memory">{props.memory ? 'M=' + props.memory : ''}</div>
      <div className="input">{props.input}</div>
    </div>
  );
}

export default Input;