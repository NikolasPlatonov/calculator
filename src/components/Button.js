import React from 'react';
import '../App.css';

function Button(props) {
  return (
    <button
      className={props.className}
      onClick={() => {
        props.onClickHandler(props.children);
      }}
    >
      {props.children}
    </button>
  );
}

export default Button;
