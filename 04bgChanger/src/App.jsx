import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('skyblue');
  // const changeColor = (newColor) => {
  //   console.log('new color:', newColor);
  //   color === newColor ? setColor('skyblue') : setColor(newColor);
  // }
  return (
    <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl' style={{backgroundColor: color}}>
        <button onClick={() => setColor('red')} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: 'red'}}>RED</button>
        <button onClick={() => setColor('green')} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: 'green'}}>GREEN</button>
        <button onClick={() => setColor('skyBlue')} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: 'skyBlue'}}>BLUE</button>
        </div>
      </div>
    </div>
  )
}

export default App
