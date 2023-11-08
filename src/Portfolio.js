import React, { Component } from 'react'
import { useLocation } from "react-router-dom";
import { useEffect, useState  } from 'react';
import Navbar from './components/navbar';
import './Portfolio.css'

const Portfolio = () => {
  const location = useLocation();
  const name = location.state.Text;
  const price = location.state.stockPrice;
  const [portfolioContent, setPortfolioContent] = useState('');

  useEffect(() => {
    const data = { name, price };
    window.localStorage.setItem(name, JSON.stringify(data));
    const storedData = JSON.parse(window.localStorage.getItem(name));

    // Create HTML content for the new data
    const newHtml = `
      <h1 className='name'>Name: ${storedData.name}</h1>
      <h1 className='price'>Price: ${storedData.price}</h1>
    `;

    // Append the new data to the existing content
    setPortfolioContent((prevContent) => prevContent + newHtml);
  }, [name, price]);

  return (
    <div id='portfolioContainer'>
      <Navbar />
      <div dangerouslySetInnerHTML={{ __html: portfolioContent }} />
    </div>
  );
};

export default Portfolio;