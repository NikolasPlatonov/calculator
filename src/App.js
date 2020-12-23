import React, { useState } from 'react';
import '../src/App.css';
import Input from './components/Input';
import Button from './components/Button';

function App() {
  const [input, setInput] = useState(0);
  const [previousNumber, setPreviousNumber] = useState();
  const [operator, setOperator] = useState();
  const [memory, setMemory] = useState();
  console.log('🚀 ~ file: App.js ~ line 11 ~ App ~ memory', memory);

  const addToInput = (value) => {
    if (input === 0) {
      setInput(value);
    } else {
      setInput(input + value);
    }
  };

  const addDecimalToInput = (value) => {
    if (input === 0) {
      setInput(input + value);
    } else if (input.indexOf('.') === -1) {
      setInput(input + value);
    }
  };

  const addZeroToInput = (value) => {
    if (input.includes('0.')) {
      setInput(input + value);
    } else if (input !== 0) {
      setInput(input + value);
    } else {
      setInput(input);
    }
  };

  const clearInput = () => {
    setInput(0);
  };

  const additionBtn = () => {
    setPreviousNumber(input);
    setInput('');
    setOperator('addition');
  };

  const subtractionBtn = () => {
    setPreviousNumber(input);
    setInput('');
    setOperator('subtract');
  };

  const multiplyBtn = () => {
    setPreviousNumber(input);
    setInput('');
    setOperator('multiply');
  };

  const divideBtn = () => {
    setPreviousNumber(input);
    setInput('');
    setOperator('divide');
  };

  const equalBtn = () => {
    if (operator === 'addition') {
      setInput(parseInt(previousNumber) + parseInt(input));
    } else if (operator === 'subtract') {
      setInput(parseInt(previousNumber) - parseInt(input));
    } else if (operator === 'multiply') {
      setInput(parseInt(previousNumber) * parseInt(input));
    } else if (operator === 'divide') {
      setInput(parseInt(previousNumber) / parseInt(input));
    }
  };

  const mPlusBtn = () => {
    setMemory(input);
    setInput('0');
  };

  const mMinusBtn = () => {
    setMemory('');
  };

  return (
    <div className="main_container">
      <div></div>
      <div className="container">
        <Input input={input} memory={memory}>
          {input}
        </Input>
        <div className="btn_container">
          <Button onClickHandler={clearInput}>AC</Button>
          <Button>+/-</Button>
          <Button>%</Button>
          <Button onClickHandler={divideBtn}>/</Button>
          <Button>mc</Button>
          <Button>mr</Button>
          <Button>m-</Button>
          <Button onClickHandler={mPlusBtn}>m+</Button>
          <Button onClickHandler={addToInput}>7</Button>
          <Button onClickHandler={addToInput}>8</Button>
          <Button onClickHandler={addToInput}>9</Button>
          <Button onClickHandler={multiplyBtn}>x</Button>
          <Button onClickHandler={addToInput}>4</Button>
          <Button onClickHandler={addToInput}>5</Button>
          <Button onClickHandler={addToInput}>6</Button>
          <Button onClickHandler={subtractionBtn}>-</Button>
          <Button onClickHandler={addToInput}>1</Button>
          <Button onClickHandler={addToInput}>2</Button>
          <Button onClickHandler={addToInput}>3</Button>
          <Button onClickHandler={additionBtn}>+</Button>
          <Button onClickHandler={addZeroToInput}>0</Button>
          <Button onClickHandler={addDecimalToInput}>.</Button>
          <Button onClickHandler={equalBtn}>=</Button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
