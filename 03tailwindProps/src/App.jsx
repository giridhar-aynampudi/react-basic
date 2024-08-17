import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)

  const myObject = {
    name: 'John Doe',
    age: 30,
    job: 'Software Engineer',
    hobbies: ['Reading', 'Coding', 'Running']
  }

  let newArr = [1, 2, 3, 4, 5]
  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
      <Card username="giridhar" post="dev" image='https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/10-intelligent-dog-breeds/golden-retriever-tongue-out.jpg'/>
      <Card username='shash' post='pm'/>,
      <Card myArr={newArr}/>
    </>
  )
}

export default App
