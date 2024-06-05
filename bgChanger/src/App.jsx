import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('grey')
  

  return (
    <>
    <div className='w-full h-screen flex justify-center items-center duration-200' style={{backgroundColor:color}}>
      <div className='h-10 bg-gray-400 flex flex-wrap justify-center items-center rounded-full px-4' >
        <div className='flex flex-wrap space-x-4'>
          <button className='outline-none shadow-lg bg-red-500 hover:bg-red-700 text-white rounded-full px-3' onClick={()=>setColor("red")} >Red</button>
          <button className='outline-none shadow-lg bg-green-500 hover:bg-green-700 text-white rounded-full px-3' onClick={()=>setColor("green")} >Green</button>
          <button className='outline-none shadow-lg bg-blue-500 hover:bg-pblue-700 text-white rounded-full px-3' onClick={()=>setColor("blue")} >Blue</button>
          <button className='outline-none shadow-lg bg-yellow-500 hover:bg-yellow-700 text-white rounded-full px-3' onClick={()=>setColor("yellow")}>Yellow</button>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
