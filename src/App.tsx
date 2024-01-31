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
  Pcs,
  Shoes,
  ChildrenToys,
  Fashion,
  Laptops,
  Watches,
  Homes,
  Dining,
  HealthAndBeauty,
  Kitchen,
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
        <Route path="/product/:id" element={<SeeAProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/pcs" element={<Pcs />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/toys" element={<ChildrenToys />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/laptops" element={<Laptops />} />
        <Route path="/watches" element={<Watches />} />
        <Route path="/homes" element={<Homes />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/beauty" element={<HealthAndBeauty />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="*" element={<>404</>} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
