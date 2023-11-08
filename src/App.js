import './App.css';

import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontContainer from './components/frontContainer';
import Navbar from './components/navbar.js';
import Trade from './Trade.js';
import Login from './components/login';
import Portfolio from './Portfolio.js';


export  class App extends Component {
  render() {
    return (
      <div> 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FrontContainer />} />
                <Route path="/Trade" element={<Trade />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Portfolio" element={<Portfolio  />} />
                {/* <Route path="*" element={<PageNotFound />} /> */}
            </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
