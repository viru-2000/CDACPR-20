import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../assets/styles/Login.css";

const Login = () => {
  const { login, user, isAdmin } = useAuth();
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if user is already logged in
    if (user) {
      navigate(isAdmin() ? "/admin" : "/dashboard");
    }
  }, [user, isAdmin, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(usernameOrEmail, password);
    if (!success) {
      setError("Invalid credentials!");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username or Email"
          value={usernameOrEmail}
          onChange={(e) => setUsernameOrEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
