import React from 'react';

import './App.css';
import { BrowserRouter } from 'react-router-dom'

import Routes from "./Routes";
import Header from './components/Header';
import Footer from './components/Footer'

function App() {
  
  return(
    <BrowserRouter>

      <Header/>

      <Routes/>

      
    </BrowserRouter>
  )
}

export default App;
