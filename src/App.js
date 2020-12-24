import React, { useState } from 'react';
import '../src/App.css';
import Input from './components/Input';
import Button from './components/Button';

function App() {
  const [input, setInput] = useState(0);
  const [previousNumber, setPreviousNumber] = useState();
  const [operator, setOperator] = useState();
  const [memory, setMemory] = useState();
  const [display, setDisplay] = useState();

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
    if (input.includes('0.') || input !== 0) {
      setInput(input + value);
    }
    // else if (input !== 0) {
    //   setInput(input + value);
    // } else {
    //   setInput(input);
    // }
  };

  const clearInput = () => {
    setInput(0);
    setDisplay('');
  };

  const additionBtn = (symbol) => {
    setDisplay(input + symbol);
    setPreviousNumber(input);
    setInput('');
    setOperator('addition');
  };

  const subtractionBtn = (symbol) => {
    setDisplay(input + symbol);
    setPreviousNumber(input);
    setInput('');
    setOperator('subtract');
  };

  const multiplyBtn = (symbol) => {
    setDisplay(input + symbol);
    setPreviousNumber(input);
    setInput('');
    setOperator('multiply');
  };

  const divideBtn = (symbol) => {
    setDisplay(input + symbol);
    setPreviousNumber(input);
    setInput('');
    setOperator('divide');
  };

  const percentBtn = (symbol) => {
    if (!previousNumber) {
      return setInput(0);
    } else {
      setDisplay(display + input + symbol);
      // setInput('');
      setOperator(operator + ', ' + 'percent');
    }
  };

  const equalBtn = (symbol) => {
    if (operator === 'addition') {
      setDisplay(display + input + symbol);
      setInput(parseInt(previousNumber) + parseInt(input));
    } else if (operator === 'subtract') {
      setDisplay(display + input + symbol);
      setInput(parseInt(previousNumber) - parseInt(input));
    } else if (operator === 'multiply') {
      setDisplay(display + input + symbol);
      setInput(parseInt(previousNumber) * parseInt(input));
    } else if (operator === 'divide') {
      setDisplay(display + input + symbol);
      setInput(parseInt(previousNumber) / parseInt(input));
    } else if (operator.includes('percent') && operator.includes('addition')) {
      setInput(
        parseInt(previousNumber) +
          (parseInt(previousNumber) * parseInt(input)) / 100
      );
    } else if (operator.includes('percent') && operator.includes('subtract')) {
      setInput(
        parseInt(previousNumber) -
          (parseInt(previousNumber) * parseInt(input)) / 100
      );
    } else if (operator.includes('percent') && operator.includes('multiply')) {
      setInput(
        (parseInt(previousNumber) *
          (parseInt(previousNumber) * parseInt(input))) /
          100
      );
    } else if (operator.includes('percent') && operator.includes('divide')) {
      setInput(
        parseInt(previousNumber) /
          (parseInt(previousNumber) * parseInt(input)) /
          100
      );
    }
  };

  const mPlusBtn = () => {
    setMemory(parseInt(memory) + parseInt(input));
    setInput(input);
  };

  const mMinusBtn = () => {
    setMemory(parseInt(memory) - parseInt(input));
    setInput(input);
  };

  const mcBtn = () => {
    setMemory('');
  };

  const mrBtn = () => {
    setMemory(input);
  };

  return (
    <div className="main_container">
      <div></div>
      <div className="container">
        <Input input={input} memory={memory} display={display}>
          {input}
        </Input>
        <div className="btn_container">
          <Button onClickHandler={clearInput}>AC</Button>
          <Button>+/-</Button>
          <Button onClickHandler={percentBtn}>%</Button>
          <Button onClickHandler={divideBtn}>/</Button>
          <Button onClickHandler={mcBtn}>mc</Button>
          <Button onClickHandler={mrBtn}>mr</Button>
          <Button onClickHandler={mMinusBtn}>m-</Button>
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
