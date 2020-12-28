import React, { useState } from 'react';
import '../src/App.css';
import Input from './components/Input';
import Button from './components/Button';

function App() {
  const [input, setInput] = useState(0);
  const [firstNumber, setFirstNumber] = useState();
  const [secondNumber, setSecondNumber] = useState();
  const [stringOperatorValue, setStringOperatorValue] = useState();
  const [symbolOperator, setSymbolOperator] = useState();
  const [equalOperator, setEqualOperator] = useState();
  const [memory, setMemory] = useState();

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
    setFirstNumber('');
    setSymbolOperator('');
    setSecondNumber('');
    setEqualOperator('');
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
    setFirstNumber(input);
    setSymbolOperator(symbol);
    setInput('');
    setStringOperatorValue('addition');
  };

  const subtractionBtn = (symbol) => {
    setFirstNumber(input);
    setSymbolOperator(symbol);
    setInput('');
    setStringOperatorValue('subtract');
  };

  const multiplyBtn = (symbol) => {
    setFirstNumber(input);
    setSymbolOperator(symbol);
    setInput('');
    setStringOperatorValue('multiply');
  };

  const divideBtn = (symbol) => {
    setFirstNumber(input);
    setSymbolOperator(symbol);
    setInput('');
    setStringOperatorValue('divide');
  };

  const percentBtn = () => {
    if (!firstNumber) {
      return setInput(0);
    } else {
      setSecondNumber((parseFloat(firstNumber) * parseFloat(input)) / 100);
      setInput('');
      setStringOperatorValue(stringOperatorValue + ', ' + 'percent');
    }
  };

  const equalBtn = (symbol) => {
    if (stringOperatorValue === 'addition') {
      setInput(parseFloat(firstNumber) + parseFloat(input));
      setSecondNumber(input);
      setEqualOperator(symbol);
      setStringOperatorValue(stringOperatorValue + '_again');
    } else if (stringOperatorValue === 'addition_again') {
      setInput(parseFloat(secondNumber) + parseFloat(input));
      setFirstNumber(input);
      setEqualOperator(symbol);
    } else if (stringOperatorValue === 'subtract') {
      setInput(parseFloat(firstNumber) - parseFloat(input));
      setSecondNumber(input);
      setEqualOperator(symbol);
      setStringOperatorValue(stringOperatorValue + '_again');
    } else if (stringOperatorValue === 'subtract_again') {
      setInput(parseFloat(input) - parseFloat(secondNumber));
      setFirstNumber(input);
      setEqualOperator(symbol);
    } else if (stringOperatorValue === 'multiply') {
      setInput(parseFloat(firstNumber) * parseFloat(input));
      setSecondNumber(input);
      setEqualOperator(symbol);
      setStringOperatorValue(stringOperatorValue + '_again');
    } else if (stringOperatorValue === 'multiply_again') {
      setInput(parseFloat(secondNumber) * parseFloat(input));
      setFirstNumber(input);
      setEqualOperator(symbol);
    } else if (stringOperatorValue === 'divide') {
      setInput(parseFloat(firstNumber) / parseFloat(input));
      setSecondNumber(input);
      setEqualOperator(symbol);
      setStringOperatorValue(stringOperatorValue + '_again');
    } else if (stringOperatorValue === 'divide_again') {
      setInput(parseFloat(input) / parseFloat(secondNumber));
      setFirstNumber(input);
      setEqualOperator(symbol);
    } else if (stringOperatorValue === 'addition, percent') {
      setInput(parseFloat(firstNumber) + parseFloat(secondNumber));
      setEqualOperator(symbol);
      setStringOperatorValue(stringOperatorValue + '_again');
    } else if (stringOperatorValue.includes('addition, percent_again')) {
      setFirstNumber(input);
      setInput(parseFloat(input) + parseFloat(secondNumber));
      setEqualOperator(symbol);
    } else if (stringOperatorValue === 'subtract, percent') {
      setInput(parseFloat(firstNumber) - parseFloat(secondNumber));
      setEqualOperator(symbol);
      setStringOperatorValue(stringOperatorValue + '_again');
    } else if (stringOperatorValue.includes('subtract, percent_again')) {
      setFirstNumber(input);
      setInput(parseFloat(input) - parseFloat(secondNumber));
      setEqualOperator(symbol);
    } else if (stringOperatorValue === 'multiply, percent') {
      setInput(parseFloat(firstNumber) * parseFloat(secondNumber));
      setFirstNumber(parseFloat(firstNumber) * parseFloat(secondNumber));
      setEqualOperator(symbol);
      setStringOperatorValue(stringOperatorValue + '_again');
    } else if (stringOperatorValue.includes('multiply, percent_again')) {
      setInput(parseFloat(input) * parseFloat(secondNumber));
      setFirstNumber(parseFloat(input) * parseFloat(secondNumber));
      setEqualOperator(symbol);
    } else if (stringOperatorValue === 'divide, percent') {
      setInput(parseFloat(firstNumber) / parseFloat(secondNumber));
      setFirstNumber(parseFloat(firstNumber) / parseFloat(secondNumber));
      setEqualOperator(symbol);
      setStringOperatorValue(stringOperatorValue + '_again');
    } else if (stringOperatorValue.includes('divide, percent_again')) {
      setFirstNumber(input);
      setInput(parseFloat(input) / parseFloat(secondNumber));
      setEqualOperator(symbol);
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
    memory ? setInput(memory) : setMemory(input);
  };

  return (
    <div className="main_container">
      <div></div>
      <div className="container">
        <Input
          firstNumber={firstNumber}
          secondNumber={secondNumber}
          symbolOperator={symbolOperator}
          stringOperatorValue={stringOperatorValue}
          equalOperator={equalOperator}
          input={input}
          memory={memory}
        >
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
