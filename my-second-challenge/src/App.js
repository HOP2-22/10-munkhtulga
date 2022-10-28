import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import LogIn from "./pages/Login"
import Products from "./pages/Products"
import Services from "./pages/Services"
import MyButton from "./components/Suiii"
import timer from "./components/timer"

function App() {
  return (
    <div className="container">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/MyButton" element={<MyButton/>}/>
      <Route path="/timer" element={<timer/>}/>
      </Routes>
      </BrowserRouter></div>
  );
}

export default App;
