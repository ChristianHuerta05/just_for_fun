import { useState } from 'react'
import LandingContainer from './components/landing_page/LandingContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingContainer />}>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
