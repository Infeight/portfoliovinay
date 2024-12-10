import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from '../components/home'
import Certifications from '../components/certifications'
import Resume from '../components/resume'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Projects from '../components/projects'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/certifications' element={<Certifications/>}/>
       <Route path='/resume' element={<Resume/>}/>
       <Route path='/projects' element={<Projects/>}/>
     </Routes>
    </BrowserRouter>
     {/* <Home/> */}
    </>
  )
}

export default App
