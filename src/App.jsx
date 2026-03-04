import { useState } from 'react'
import './App.css'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Container from '@mui/material/Container'
import { Routes,Route } from 'react-router'

function App() {

  return (
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path='/' element={<Home/>}/>
        </Route>
      </Routes>
  )
}

export default App
