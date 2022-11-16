import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardInfo from "./components/CardInfo"

import BlogPost from './components/BlogPost'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<BlogPost/>}/>
      <Route path="/cardinfo" element={<CardInfo/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
