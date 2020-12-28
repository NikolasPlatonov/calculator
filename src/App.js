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
    } else if (String(input).includes('0.') || input !== 0) {
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
          <Button className={'btn_lightgrey'} onClickHandler={clearInput}>
            AC
          </Button>
          <Button className={'btn_lightgrey'} onClickHandler={plusMinusBtn}>
            +/-
          </Button>
          <Button className={'btn_lightgrey'} onClickHandler={percentBtn}>
            %
          </Button>
          <Button className={'btn_orange'} onClickHandler={divideBtn}>
            /
          </Button>
          <Button className={'btn_darkgrey'} onClickHandler={mcBtn}>
            mc
          </Button>
          <Button className={'btn_darkgrey'} onClickHandler={mrBtn}>
            mr
          </Button>
          <Button className={'btn_darkgrey'} onClickHandler={mMinusBtn}>
            m-
          </Button>
          <Button className={'btn_orange'} onClickHandler={mPlusBtn}>
            m+
          </Button>
          <Button className={'btn_darkgrey'} onClickHandler={addToInput}>
            7
          </Button>
          <Button className={'btn_darkgrey'} onClickHandler={addToInput}>
            8
          </Button>
          <Button className={'btn_darkgrey'} onClickHandler={addToInput}>
            9
          </Button>
          <Button className={'btn_orange'} onClickHandler={multiplyBtn}>
            x
          </Button>
          <Button className={'btn_darkgrey'} onClickHandler={addToInput}>
            4
          </Button>
          <Button className={'btn_darkgrey'} onClickHandler={addToInput}>
            5
          </Button>
          <Button className={'btn_darkgrey'} onClickHandler={addToInput}>
            6
          </Button>
          <Button className={'btn_orange'} onClickHandler={subtractionBtn}>
            -
          </Button>
          <Button className={'btn_darkgrey'} onClickHandler={addToInput}>
            1
          </Button>
          <Button className={'btn_darkgrey'} onClickHandler={addToInput}>
            2
          </Button>
          <Button className={'btn_darkgrey'} onClickHandler={addToInput}>
            3
          </Button>
          <Button className={'btn_orange'} onClickHandler={additionBtn}>
            +
          </Button>
          <Button className={'btn_null'} onClickHandler={addZeroToInput}>
            0
          </Button>
          <Button className={'btn_darkgrey'} onClickHandler={addDecimalToInput}>
            .
          </Button>
          <Button className={'btn_orange'} onClickHandler={equalBtn}>
            =
          </Button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
