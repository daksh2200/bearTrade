import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import './componentStyles/navbar.css';
import Login from './login';

const Navbar = () => {
  // const [username, setUsername] = useState("");
  // const location = useLocation();
  // const [loginButtonText, setLoginButtonText] = useState("LogIn");

  // useEffect(() => {
  //   const username = location.state.username;
  //   setUsername(username);
  // }, [location]);

  // const modifyLoginButton = (text) => {
  //   setLoginButtonText(text);
  // };
    return (
      <div>
            <nav className="navbar   navbar-dark " >
            <div className="container-fluid">
                
                <ul className="navbar-nav ">
                <a className="navbar-brand">BearTrade</a>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/Trade">Trade</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/Portfolio">Portfolio</a>
                </li>
                </ul>
                <div className="logindiv">
                <a className="nav-link active" aria-current="page" href="/Login">
                    <button className="btn btn-outline-success" id="loginbtn" type="submit">LogIn</button>
                </a>
                </div>
                

            </div>
            </nav>
      </div>
    )
  };


export default Navbar;