import { useState } from 'react'
import './App.css'
import Login from './components/login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider';

function App() {
  
  const [username, setUsername] = useState('');
  const handleLogin= (username) => {
    console.log('Logged in as:', username);
    setUsername(username);
  }
  return (
    <UserContextProvider>
      <h1>React basic for context api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
