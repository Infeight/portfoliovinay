import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from '../src/components/home'
import Certifications from '../src/components/certifications'
import Resume from '../src/components/resume'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Projects from '../src/components/projects'


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
