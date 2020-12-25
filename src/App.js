import React, { useState } from 'react';
import '../src/App.css';
import Input from './components/Input';
import Button from './components/Button';

function App() {
  const [input, setInput] = useState(0);
  console.log(' ~ input', input);
  const [previousNumber, setPreviousNumber] = useState();
  console.log(' ~ previousNumber', previousNumber);
  const [currentNumber, setCurrentNumber] = useState();
  console.log(' ~ currentNumber', currentNumber);
  const [operator, setOperator] = useState();
  console.log(' ~ operator', operator);
  const [memory, setMemory] = useState();
  const [display, setDisplay] = useState();
  console.log(' ~ display', display);

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
    if (input === 0) {
      setInput(input);
    } else if (input.includes('.') || input !== 0) {
      setInput(input + value);
    }
  };

  const clearInput = () => {
    setInput(0);
    setDisplay('');
  };

  const plusMinusBtn = () => {
    if (input === 0) {
      setInput(input);
    } else if (input < 0) {
      setInput(-input);
    } else {
      setInput(-input);
    }
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
      setOperator(operator + ', ' + 'percent');
    }
  };

  const equalBtn = (symbol) => {
    if (operator === 'addition') {
      let displayValue = display + input + symbol;
      let displayedInput = parseFloat(previousNumber) + parseFloat(input);
      let isDecimalValue = input.indexOf('.') === -1;
      setDisplay(displayValue);
      setInput(!isDecimalValue ? displayedInput.toFixed(1) : displayedInput);
    } else if (operator === 'subtract') {
      let displayValue = display + input + symbol;
      let displayedInput = parseFloat(previousNumber) - parseFloat(input);
      let isDecimalValue = input.indexOf('.') === -1;
      setDisplay(displayValue);
      setInput(!isDecimalValue ? displayedInput.toFixed(1) : displayedInput);
    } else if (operator === 'multiply') {
      let displayValue = display + input + symbol;
      let displayedInput = parseFloat(previousNumber) * parseFloat(input);
      let isDecimalValue = input.indexOf('.') === -1;
      setDisplay(displayValue);
      setInput(!isDecimalValue ? displayedInput.toFixed(1) : displayedInput);
    } else if (operator === 'divide') {
      let displayValue = display + input + symbol;
      let displayedInput = parseFloat(previousNumber) / parseFloat(input);
      let isDecimalValue = input.indexOf('.') === -1;
      setDisplay(displayValue);
      setInput(!isDecimalValue ? displayedInput.toFixed(1) : displayedInput);
    } else if (operator.includes('percent') && operator.includes('addition')) {
      setInput(
        parseFloat(previousNumber) +
          (parseFloat(previousNumber) * parseFloat(input)) / 100
      );
    } else if (operator.includes('percent') && operator.includes('subtract')) {
      setInput(
        parseFloat(previousNumber) -
          (parseFloat(previousNumber) * parseFloat(input)) / 100
      );
    } else if (operator.includes('percent') && operator.includes('multiply')) {
      setInput(
        (parseFloat(previousNumber) *
          (parseFloat(previousNumber) * parseFloat(input))) /
          100
      );
    } else if (operator.includes('percent') && operator.includes('divide')) {
      setInput(
        parseFloat(previousNumber) /
          (parseFloat(previousNumber) * parseFloat(input)) /
          100
      );
    }
  };

  const mPlusBtn = () => {
    setMemory(parseFloat(memory) + parseFloat(input));
    setInput(input);
  };

  const mMinusBtn = () => {
    setMemory(parseFloat(memory) - parseFloat(input));
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
          <Button onClickHandler={plusMinusBtn}>+/-</Button>
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
