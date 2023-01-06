import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import HomeLoggedin from './components/HomeLoggedin';
import History from "./assets/Headeronlytext"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/loggedin" element={<HomeLoggedin/>}/>
      
      <Route path="/test" element={<History/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;