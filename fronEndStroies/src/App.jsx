import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Component/Home'
import Login from './Component/Login'
import Signup from './Component/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
        </Routes>
      
    </>
  )
}

export default App
