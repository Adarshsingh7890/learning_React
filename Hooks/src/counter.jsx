import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function Counter() {
    let [counter, setcounter] = useState(0);
    let [message, setmessage] = useState('');

    function Increment(){
        if (counter < 20){counter++;
            console.log(counter);
            setcounter(counter);
            setmessage('');
        }
        else {
            setmessage('Cannot go above 20');
        }
    }

    function Decrement(){
        if (counter>0){counter--;
            console.log(counter);
            setcounter(counter);
            setmessage('');
        }else{
            setmessage('Counter cannot go below 0');
        }
    }

    return (
    <>
      <button onClick = {Increment}>Increment</button>
       <h1 className="text-10xl font-bold underline">Counter Value is:  {counter}</h1>
      <button onClick = {Decrement}>Decrement</button>
       <p>{message}</p>
    </>
  )
}

export default Counter