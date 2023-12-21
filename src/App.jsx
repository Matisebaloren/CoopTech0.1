import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './views/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Intranet from './views/Intranet'
import Servicios from './views/Servicios'


function App() {

  return (
    <>
      <Navbar/>
      <section className='mt-14'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/*' element={<Home/>} />
        <Route path='/Login' element={<Intranet/>} />
        <Route path='/Servicios' element={<Servicios/>} />
      </Routes>
      </section>
      
      <Footer/>
    </>
  )
}

export default App
