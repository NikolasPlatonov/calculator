import React from 'react';
import '../App.css';

function Button(props) {
  // const btnColor = (value) => {
  //   return (
  //     !isNaN(value) ||
  //     value === '.' ||
  //     value === 'mc' ||
  //     value === 'mr' ||
  //     value === 'm-'
  //   );
  // };
  const btnNull = (value) => {
    return value === '0';
  };

  return (
    <button
      className={`button ${
        // btnColor(props.children) ? 'btn_darkgrey' : 'btn_orange'
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
