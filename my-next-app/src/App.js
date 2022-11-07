import './App.css';
import React from "react";
import Container from '@mui/material/Container'
import Header from "./components/Header"
import ActionAreaCard from './components/Card'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './components/Home'

function App() {
  return (
    <Home />
  );
}

export default App;
