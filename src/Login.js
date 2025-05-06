import React, { useState } from "react";

const Login = ({ onLogin, toggleForm }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="blue-button">Login</button>

      <button
        type="button"
        className="blue-button"
        onClick={toggleForm}
      >
        Don't have an account? Create one
      </button>
    </form>
  );
};

export default Login;
