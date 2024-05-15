// src/components/Login/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setUsername }) => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("username", name);
    setUsername(name);
    navigate("/");
  };

  return (
    <div class="login-container">
      <h2>Login</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
