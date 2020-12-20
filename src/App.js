import React from 'react';
import '../src/App.css';

function App() {
  return (
    <div className="main_container">
      <div></div>
      <div className="container">
        <div className="input_container">
          <div className="input">789787 </div>
        </div>

        <div className="btn_container">
          <div className="btn_row">
            <button className="btn_lightgrey">AC</button>
            <button className="btn_lightgrey">+/-</button>
            <button className="btn_lightgrey">%</button>
            <button className="btn_orange">/</button>
          </div>
          <div className="btn_row">
            <button className="btn_darkgrey">mc</button>
            <button className="btn_darkgrey">mr</button>
            <button className="btn_darkgrey">m-</button>
            <button className="btn_orange">m+</button>
          </div>
          <div className="btn_row">
            <button className="btn_darkgrey">7</button>
            <button className="btn_darkgrey">8</button>
            <button className="btn_darkgrey">9</button>
            <button className="btn_orange">x</button>
          </div>
          <div className="btn_row">
            <button className="btn_darkgrey">4</button>
            <button className="btn_darkgrey">5</button>
            <button className="btn_darkgrey">6</button>
            <button className="btn_orange">-</button>
          </div>
          <div className="btn_row">
            <button className="btn_darkgrey">1</button>
            <button className="btn_darkgrey">2</button>
            <button className="btn_darkgrey">3</button>
            <button className="btn_orange">+</button>
          </div>
          <div className="btn_row">
            <button className="btn_null">0</button>
            <button className="btn_darkgrey">,</button>
            <button className="btn_orange">=</button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
