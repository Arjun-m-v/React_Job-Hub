import { useState } from 'react'
import './bootstrap.min.css'
import Home from './pages/Home'
import Details from './pages/Details'
import { Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Company from './pages/Company'
import Employee from './pages/Employee'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Reg from './pages/Reg'
import Log from './pages/Log'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='home/' element={<Home/>}/>
        <Route path='company/' element={<Company/>}/>
        <Route path='employee/' element={<Employee/>}/>
        <Route path='reg/' element={<Reg/>}/>
        <Route path='/' element={<Log/>}/>
        <Route path='/details/:id' element={<Details/>}/>
      </Routes>
      <Footer/>
      <ToastContainer/>
    </>
  )
}

export default App
