import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer/Index'
import Header from './components/Header/Index'
import Announces from './pages/Announces/Index'
import Home from './pages/Home/Index'
import Login from './pages/Login/Index'
import Register from './pages/Register/Index'

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/announces" exact component={Announces} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
      <Footer />
    </BrowserRouter>
  )
}
