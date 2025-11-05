import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Profile from './components/profile'
import ProjectSet from './components/ProjectSet'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <NavBar />
      <Profile />
      <ProjectSet />
      <Contact />
      <p class="text-center text-gray-500 text-sm mb-7">
        © 2025 Phiphop.dev
        <br />All rights reserved
      </p>
    </>
  )
}

export default App
