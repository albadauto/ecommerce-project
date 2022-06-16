import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes as Rt } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Footer from './components/Footer/Index'
import Header from './components/Header/Index'
import Announces from './pages/Announces/Index'
import Home from './pages/Home/Index'
import Login from './pages/Login/Index'
import MyAccount from './pages/MyAccount/Index'
import Recover from './pages/Recover'
import Register from './pages/Register/Index'

export default function Routes() {
  return (
    <BrowserRouter>
        <Header />
        <Rt>
          <Route path="/" exact element={<Home/>} />
          <Route path="/announces" exact element={<Announces/>} />
          <Route path="/login" exact element={<Login/>} />
          <Route path="/register" exact element={<Register/>} />
          <Route path="/recover" exact element={<Recover/>} />
          <Route path="/MyAccount" exact element={<MyAccount/>} />
        </Rt>
      <Footer />
    </BrowserRouter>
  )
}
