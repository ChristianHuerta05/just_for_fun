import { useState } from 'react'
import LandingContainer from './components/landing_page/LandingContainer'
import Login from './components/login_page/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingContainer />}>
      </Route>
      <Route path="/login" element={<Login />}>
      </Route>
      <Route path="*" element={<LandingContainer />}>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
