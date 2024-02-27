import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route} from 'react-router-dom'
import Home from './Component/Home'
import Form from './Component/Form'
import Signup from './Component/SignUp'
import Update from "./Component/Update"

import AddStory from './Component/AddStory'
import BrowseStories from './Component/BrowseStories'


function App() {
  

  return (
    <>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/browseStories' element={<BrowseStories/>}></Route>
          <Route path = '/AddStory' element={ <AddStory/>}></Route>
          <Route path = "/signup" element={ <Signup/>}></Route>
          <Route path = "/login" element={ <Form/>}></Route>
          <Route path = "/edit/:id" element={<Update/>}></Route>
        </Routes>
    </>
  )
}

export default App
