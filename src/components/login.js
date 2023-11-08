import React, { useState } from "react";
import './componentStyles/login.css'
import { useNavigate} from 'react-router-dom';
import Navbar from "./navbar";


const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Navbar.modifyLoginButton();
    navigate('/' ,{ state: { username :username || ''} });

    
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button  type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login