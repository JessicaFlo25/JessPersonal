import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import './output.css'
import LandingPage from './Components/LandingPage/LandingPage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        {/* <Route path="/about" element={<About />}/>
        <Route path="/portfolio" element={<Portfolio />}/> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
