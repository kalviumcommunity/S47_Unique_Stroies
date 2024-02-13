import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route} from 'react-router-dom'
import Home from './Component/Home'
import Login from './Component/Login'
import Signup from './Component/SignUp'

import AddStory from './Component/AddStory'
import BrowseStories from './Component/BrowseStories'


function App() {
  

  return (
    <>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/browseStories' element={<BrowseStories/>}></Route>
          <Route path = '/AddStory' element={ <AddStory/>}></Route>
        </Routes>
    </>
  )
}

export default App
