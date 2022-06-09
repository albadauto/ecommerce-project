import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer/Index'
import Header from './components/Header/Index'
import Announces from './pages/Announces/Index'
import Home from './pages/Home/Index'

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/announces" exact component={Announces} />
        </Switch>
      <Footer />
    </BrowserRouter>
  )
}
