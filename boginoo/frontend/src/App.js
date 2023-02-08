import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import HomeLoggedin from "./components/HomeLoggedin";
import History from "./components/History";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ShortLink from "./components/ShortenedUrl";
import AuthProvider from "./context/authcontext";
import Layout from "./assets/layout";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/loggedin" element={<HomeLoggedin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/history" element={<History />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/short" element={<ShortLink />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
