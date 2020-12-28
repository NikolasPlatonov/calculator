import React from 'react';
import '../App.css';

function Button(props) {
  const btnNull = (value) => {
    return value === '0';
  };

  return (
    <button
      className={`button ${
        btnNull(props.children) ? 'btn_null' : 'btn_darkgrey'
      }`}
      onClick={() => {
        props.onClickHandler(props.children);
      }}
    >
      {props.children}
    </button>
  );
}

export default Button;
