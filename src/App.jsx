import React from 'react'
import { ToastContainer } from 'react-toastify'
import Routes from './routes'

export default function App() {
  return (
    <>
    <Routes />

    <ToastContainer autoClose={3000} />
    </>
  )
}
