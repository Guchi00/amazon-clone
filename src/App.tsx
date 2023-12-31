import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import "./App.css";
import {
  Signin,
  Register,
  Home,
  GamesEssentials,
  Headsets,
  Chairs,
  ComputersMices,
  Keyboards,
  Cart,
} from "./Pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/games" element={<GamesEssentials />} />
        <Route path="/headsets" element={<Headsets />} />
        <Route path="/chairs" element={<Chairs />} />
        <Route path="/mices" element={<ComputersMices />} />
        <Route path="/keyboards" element={<Keyboards />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<>404</>} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
