import { useState, useCallback, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);


  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcefghijklmnopqrstuvwxyz";
    if (number)str += "1234567890";
    if(character)str += "[]{}+_-!@#$%^&*()";

    for(let i = 1; i <= length; i++){
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }

    setPassword(pass);
  },[number, character, length, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, number, character, passwordGenerator])
  
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className='h-screen w-full bg-black flex justify-center items-center'>
        <div className=' bg-blue-400 p-8 rounded-lg'>
          <label htmlFor="Password Generator" className='text-3xl font-bold mb-4 text-red-500 block mx-20'>Password Generator</label>
          <div className='flex justify-center items-center gap-5 mb-6'>
            <input type="text" name="box" id="password" placeholder='Password' className='w-96 py-2 rounded px-2 shadow-md' value={password} readOnly ref={passwordRef}/>
            <button onClick={copyPasswordToClipboard} className='bg-red-500 py-2 rounded text-white w-20 hover:bg-red-700 shadow-lg'>Copy</button>
          </div>
          <div className='my-10 flex items-center justify-center gap-4'>
            <input type="range" min={6} max={100} id="length" name="length" className='w-3/4 cursor-pointer' value={length} onChange={(e) => {setLength(e.target.value)}}/>
            <label htmlFor="Length" className='text-white'>Length : {length}</label>
          </div>
          <div className='flex justify-center gap-2'>
            <div className='flex items-center gap-2'>
              <input type="checkbox" id="numbers" name="numbers" className='accent-blue-500' defaultChecked={number} onChange={() => {
                  setNumber((prev) => !prev )
              }}/>
              <label htmlFor="numbers" className='text-white'>Numbers</label>
            </div>
            <div className='flex items-center gap-2'>
              <input type="checkbox" id="characters" name="characters" className='accent-blue-500' defaultChecked={character} onChange={() => {
                  setCharacter((prev) => !prev )
              }}/>
              <label htmlFor="characters" className='text-white'>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
