import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import LogIn from "./pages/Login"
import Products from "./pages/Products"
import Services from "./pages/Services"
import Layout from "./components/layout/Layout"



function App() {
  return (
   
    <BrowserRouter>
  
    <Routes>
     
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/products" element=  {<Products/>}/>
      <Route path="/" element={<Home/>}/>
      </Routes>
      
      </BrowserRouter>
  );
}

export default App;
