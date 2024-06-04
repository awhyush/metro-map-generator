// LoginPage.js

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = () => {
    // For now, let's use hard-coded data for authentication
    const hardcodedUsername = "user";
    const hardcodedPassword = "password";

    if (username === hardcodedUsername && password === hardcodedPassword) {
      // Redirect to the landing page if login is successful
      history.push("/landing");
    } else {
      // Display error message for incorrect credentials
      alert("Invalid username or password");
    }
  };

  return (
    <div className="trans">
      <div className="login-container">
        <h1 className="login-heading">Login Page</h1>
        <form className="login-form">
          <label className="login-label">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
          <label className="login-label">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <button type="button" onClick={handleLogin} className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
