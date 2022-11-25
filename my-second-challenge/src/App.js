import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import LogIn from "./pages/Login"
import Services from "./pages/Services"
import BlogPosts from "./BlogPost/BlogPost"
import {CardInfo} from "./BlogPost/CardInfo"
import Layout from "./components/layout/Layout"
import Gif from "./components/Gif"



function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/services" element={<Services />} />
          <Route path="/" element={<Home />} />
          <Route path="/blogposts" element={<BlogPosts/>}/>
          <Route path="/:id" element={<CardInfo/>}/>
          <Route path="/gif" element={<Gif/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
 
  );
}

export default App;
