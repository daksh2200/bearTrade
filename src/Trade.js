import React from 'react';
import Navbar from './components/navbar.js';
import TradingViewWidget from 'react-tradingview-widget';
import './Trade.css';
import Portfolio from './Portfolio.js';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Trade() {
  const navigate = useNavigate();

  const handleStockBuy = async () => {
    const url = `https://realstonks.p.rapidapi.com/${Text}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0be42afe40mshda0397642a0709fp107d8fjsnde55ff2c08bc',
        'X-RapidAPI-Host': 'realstonks.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const stockPrice = result.price; // No need to use await here
      console.log(stockPrice);
      const data = { stockPrice, Text };
      navigate('/Portfolio', { state: data });
    } catch (error) {
      console.error(error);
    }
  };

  const handleStockSell = () => {
    // Handle stock selling logic here
  };

  const handleChange =(event)=>{
      setText(event.target.value);
  }

  const [Text,setText]=useState("");

  return (
    <div>
      <Navbar />
      <div className="tradingview-widget-container" style={{ height: '100%', width: '100%' }}>
        <TradingViewWidget
          autosize={false}
          width="100%"
          symbol="NASDAQ:TSLA"
          interval="D"
          timezone="Asia/Kolkata"
          theme="light"
          style="1"
          locale="in"
          enable_publishing={false}
          withdateranges={true}
          allow_symbol_change={true}
          details={true}
          hotlist={true}
          calendar={true}
          container_id="tradingview_58546"
        />
      </div>

      <div className="tradingContainer">
      <input type="text" class="form-control" onChange={handleChange} placeholder="Stock Code Here" />
        <button type="button" onClick={handleStockBuy} className="tradeButton btn btn-outline-success">
          Buy
        </button>
        <button type="button" onClick={handleStockSell} className="tradeButton btn btn-outline-danger">
          Sell
        </button>
      </div>
    </div>
  );
}

export default Trade;
