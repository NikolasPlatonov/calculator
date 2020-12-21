import React from 'react';
import '../App.css';

function Button(props) {
  return (
    <button
      onClick={() => {
        props.onClickHandler(props.children);
      }}
      className="btn_darkgrey"
    >
      {props.children}
    </button>
  );
}

export default Button;
