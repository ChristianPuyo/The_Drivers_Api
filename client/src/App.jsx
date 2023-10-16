import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import HomePage from './components/HomePage/HomePage'
import SearchBar from './components/SearchBar/SearchBar'
import FormCreateDriver from './components/FormCreateDriver/FormCreateDriver'
import DetailDriver from './components/DetailDriver/DetailDriver'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/home' element={<HomePage/>} />
          <Route path='/drivers' element={<FormCreateDriver/>} />
          <Route path='/driver/:id' element={<DetailDriver/>} />
        </Routes>
      </div> 
    </BrowserRouter>     
   
  )
}

export default App
