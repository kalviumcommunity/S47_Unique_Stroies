import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route} from 'react-router-dom'
import Home from './Component/Home'
import Login from './Component/Login'
import Signup from './Component/SignUp'
import Firstentity from './Component/Firstentity'


function App() {
  const OneEntity = [
    {
      "StoryNo":"1",
      "title": "The man at the market",
      "author": "Leslie Wagner",
      "PlaceOfOrigin": "Arkansas"
    }
  ]

  return (
    <>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/entity' element></Route>
        </Routes>
        <Firstentity entity = {OneEntity}/>
    </>
  )
}

export default App
