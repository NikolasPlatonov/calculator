import React from 'react';
import '../App.css';

function Button(props) {
  const btnColor = (value) => {
    return (
      !isNaN(value) ||
      value === '.' ||
      value === 'mc' ||
      value === 'mr' ||
      value === 'm-'
    );
  };

  return (
    <button
      className={`button ${
        btnColor(props.children) ? 'btn_darkgrey' : 'btn_orange'
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
