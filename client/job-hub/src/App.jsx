import { useState } from 'react'
import './bootstrap.min.css'
import Home from './pages/Home'
import Details from './pages/Details'
import { Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details/:id' element={<Details/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
