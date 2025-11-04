import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Profile from './components/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Profile />
    </>
  )
}

export default App
