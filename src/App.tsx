import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
  Checkout,
  SeeAProduct,
} from "./Pages";
import { Search } from "./Components/Filter/Search";
import { SearchAntd } from "./Components/Filter/SearchAntd";

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
        <Route path="/product/:id" element={<SeeAProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/search" element={<Search />} />
        <Route path="/searchantd" element={<SearchAntd />} />
        <Route path="*" element={<>404</>} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
