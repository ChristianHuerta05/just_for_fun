import { useState } from 'react'
import LandingContainer from './components/landing_page/LandingContainer'
import Login from './components/login_page/login';
import Countdown from './components/countdown_page/Countdown';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Countdown />}></Route>
      <Route path="/landing" element={<LandingContainer />}></Route>
      <Route path="/countdown" element={<Countdown />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="*" element={<LandingContainer />}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
