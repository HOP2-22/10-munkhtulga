import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import HomeLoggedin from "./components/HomeLoggedin";
import History from "./assets/Headeronlytext";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loggedin" element={<HomeLoggedin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<History />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
