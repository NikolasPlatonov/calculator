import React from 'react';
import '../App.css';

function Input(props) {
  return (
    <div className="input_container">
      <div className="display">
        {props.firstNumber}
        {props.symbolOperator}
        {props.secondNumber}
        {props.equalOperator}
      </div>
      <div className="input">{props.input}</div>
      <div className="memory">{props.memory ? 'M=' + props.memory : ''}</div>
    </div>
  );
}

export default Input;
