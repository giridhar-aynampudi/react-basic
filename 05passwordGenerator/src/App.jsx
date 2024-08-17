import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charactersAllowed, setCharactersAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "0123456789";
    if(charactersAllowed) str += "!@#$%^&*()_+";

    for(let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charactersAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charactersAllowed]);

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  }

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type='text' value={password} className='outline-none w-full px-3 py-1' readOnly ref={passwordRef}/>
        <button onClick={copyPassword} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy</button>
      </div>
      <div className='flex test-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type='range' min={6} max={20} value={length} className='cursor-pointer' onChange={(e) => setLength(e.target.value)} name='' id =''/>
          <label htmlFor='length'>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox' defaultChecked={numberAllowed} onChange={() => setNumberAllowed((prev) => !prev)}/>
          <label htmlFor='number'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox' defaultChecked={charactersAllowed} onChange={() => setCharactersAllowed((prev) => !prev)}/>
          <label htmlFor='character'>Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
