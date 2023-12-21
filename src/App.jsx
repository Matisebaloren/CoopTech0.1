import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './views/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/*' element={<Home/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
