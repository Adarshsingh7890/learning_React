import './App.css'
import Input from './Components/Input'
import Buttons from './Components/Buttons'
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ useState } from 'react';



function App() {
  const [input, setInput] = useState("");
  const [prevInput, setPrevInput] = useState(null);
  const [operator, setOperator] = useState(null);
  const [resetOnNextInput, setResetOnNextInput] = useState(false);

  const handleInputChange = (event) => {
    if (resetOnNextInput) {
      setInput(event.target.value);
      setResetOnNextInput(false);
    } else {
      setInput(input + event.target.value);
    }
  };

  const handleNumberClick = (value) => {
    if (resetOnNextInput) {
      setInput(value);
      setResetOnNextInput(false);
    } else {
      setInput(input + value);
    }
  };

  const handleOperatorClick = (op) => {
    setPrevInput(input);
    setOperator(op);
    setResetOnNextInput(true);
  };

  const calculate = () => {
    if (operator && prevInput) {
      let result;
      switch (operator) {
        case '+': result = parseFloat(prevInput) + parseFloat(input); break;
        case '-': result = parseFloat(prevInput) - parseFloat(input); break;
        case '*': result = parseFloat(prevInput) * parseFloat(input); break;
        case '/': result = parseFloat(prevInput) / parseFloat(input); break;
        default: return;
      }
      setInput(result.toString());
      setPrevInput(null);
      setOperator(null);
      setResetOnNextInput(true);
    }
  };

  const handleClick = (value) => {
    switch (value) {
      case 'C':
        setInput("");
        setPrevInput(null);
        setOperator(null);
        break;
      case '=':
        calculate();
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        handleOperatorClick(value);
        break;
      default:
        handleNumberClick(value);
        break;
    }
  };

  

  return (
    <div className='outer'>
      <div className='Container'>
        <div>
          <Input value = {input} onChange={handleInputChange}></Input>
        </div>
        <div className='buttons'>
          <Buttons val={'1'} onClick={() => handleClick('1')}></Buttons>
          <Buttons val={'2'} onClick={() => handleClick('2')}></Buttons>
          <Buttons val={'3'} onClick={() => handleClick('3')}></Buttons>
          <Buttons val={'x'} onClick={() => handleClick('*')}></Buttons>
        </div>
        <div className='buttons'>
          <Buttons val={'4'} onClick={() => handleClick('4')}></Buttons>
          <Buttons val={'5'} onClick={() => handleClick('5')}></Buttons>
          <Buttons val={'6'} onClick={() => handleClick('6')}></Buttons>
          <Buttons val={'-'} onClick={() => handleClick('-')}></Buttons>
        </div>
        <div className='buttons'>
          <Buttons val={'7'} onClick={() => handleClick('7')}></Buttons>
          <Buttons val={'8'} onClick={() => handleClick('8')}></Buttons>
          <Buttons val={'9'} onClick={() => handleClick('9')}></Buttons>
          <Buttons val={'+'} onClick={() => handleClick('+')}></Buttons>
        </div>
        <div className='buttons'>
          <Buttons val={'/'} onClick={() => handleClick('/')}></Buttons>
          <Buttons val={'0'} onClick={() => handleClick('0')}></Buttons>
          <Buttons val={'C'} onClick={() => handleClick('C')}></Buttons>
          <Buttons val={'='} onClick={() => handleClick('=')}></Buttons>
        </div>
      </div>
    </div>
  )
}

export default App
