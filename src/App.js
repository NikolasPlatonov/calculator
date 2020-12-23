import React, { useState } from 'react';
import '../src/App.css';
import Input from './components/Input';
import Button from './components/Button';

function App() {
  const [input, setInput] = useState(0);
  console.log('input===', input);
  const [previousNumber, setPreviousNumber] = useState();
  console.log('previousNumber===', previousNumber);
  const [currentNumber, setCurrentNumber] = useState();
  console.log('currentNumber===', currentNumber);
  const [operator, setOperator] = useState();
  console.log('operator===', operator);

  // useEffect(() => {}, []);

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
    setInput(input + value);
  };

  const clearInput = () => {
    setInput(0);
  };

  const additionBtn = () => {
    setPreviousNumber(input);
    setOperator('plus');
    setInput(input);
  };

  const subtraction = () => {
    setPreviousNumber(input);
    setOperator('minus');
    setInput(input);
  };

  const equalBtn = () => {
    setCurrentNumber(input);
    if (operator === 'plus') {
      setInput(parseInt(previousNumber) + parseInt(currentNumber));
    } else if (operator === 'minus') {
      setInput(parseInt(previousNumber) - parseInt(currentNumber));
    }
  };

  return (
    <div className="main_container">
      <div></div>
      <div className="container">
        <Input input={input}>{input}</Input>

        <div className="btn_container">
          <div className="btn_row">
            <Button onClickHandler={clearInput}>AC</Button>
            <Button>+/-</Button>
            <Button>%</Button>
            <Button>/</Button>
          </div>
          <div className="btn_row">
            <Button>mc</Button>
            <Button>mr</Button>
            <Button>m-</Button>
            <Button>m+</Button>
          </div>
          <div className="btn_row">
            <Button onClickHandler={addToInput}>7</Button>
            <Button onClickHandler={addToInput}>8</Button>
            <Button onClickHandler={addToInput}>9</Button>
            <Button>x</Button>
          </div>
          <div className="btn_row">
            <Button onClickHandler={addToInput}>4</Button>
            <Button onClickHandler={addToInput}>5</Button>
            <Button onClickHandler={addToInput}>6</Button>
            <Button onClickHandler={subtraction}>-</Button>
          </div>
          <div className="btn_row">
            <Button onClickHandler={addToInput}>1</Button>
            <Button onClickHandler={addToInput}>2</Button>
            <Button onClickHandler={addToInput}>3</Button>
            <Button onClickHandler={additionBtn}>+</Button>
          </div>
          <div className="btn_row">
            <Button onClickHandler={addZeroToInput}>0</Button>
            <Button onClickHandler={addDecimalToInput}>.</Button>
            <Button onClickHandler={equalBtn}>=</Button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
