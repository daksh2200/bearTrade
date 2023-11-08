import React, { Component } from 'react'
import { useState } from "react";
import Navbar from './navbar.js';
import './componentStyles/frontContainer.css'
import Graphimg from './graphimg.jpg'
import logo from '../logobear.png'

export class FrontContainer extends Component {
  render() {
    return (
       <div>
            
            <div className='firstContainer'>
                <Navbar/>
                <h1 className='moto'>Charting Your Financial Future.</h1>
                <h2 className='moto-2'>"Your Path to Prosperity Starts Here."</h2>
                <a href="/Trade"  >
                    <button type="button" class="tradeButton btn btn-outline-light">Trade Now</button>
                </a>

            </div>
            <div className='secondContainer'>
              <h1>Your Gateway to Global Markets.</h1>
              <h2>Empowering You to Navigate the Complex World of Trading with Confidence.</h2>
              <img className='graphimg' src={Graphimg}></img>  
              <img className='logo' src={logo}></img>

            </div>
      </div>
    )
  }
}

export default FrontContainer