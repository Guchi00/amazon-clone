import React from 'react';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import './App.css';
import { NavBar } from './Components/Navigation/NavBar';
import { Signin, Register, Home } from './Pages';

const App = () => {
  return (
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Signin />} />
          <Route path="*" element={<>404</>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
