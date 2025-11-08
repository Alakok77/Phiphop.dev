import './App.css'
import { Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar'
import Home from './pages/Home'
import ProjectPage from './pages/ProjectPage'

function App() {
  return (
    <>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />      
        <Route path="/Project" element={<ProjectPage />} />
      </Routes>

      <p className="text-center text-gray-500 text-sm mb-7 mt-7">
        © 2025 Phiphop.dev
        <br />All rights reserved
      </p>
    </>
  )
}

export default App
