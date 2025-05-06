import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import usersData from "./users.json";
import "./App.css";

function App() {
  const [users, setUsers] = useState(usersData);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (username, password) => {
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      setIsLoggedIn(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  const handleRegister = (newUser) => {
    const exists = users.some((u) => u.username === newUser.username);
    if (exists) {
      setErrorMessage("Username already exists!");
    } else {
      setUsers([...users, newUser]); // only frontend memory, not file
      setIsRegistering(false);
      setErrorMessage("");
      alert("Registered successfully! You can now login.");
    }
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <div className="login-container">
          <h2>Welcome to VDart!</h2>
        </div>
      ) : isRegistering ? (
        <div className="login-container">
          <h2>Register</h2>
          <Register onRegister={handleRegister} />
          <button onClick={() => setIsRegistering(false)}>Back to Login</button>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
      ) : (
        <div className="login-container">
          <h2>Login</h2>
          <Login onLogin={handleLogin} />
          <button onClick={() => setIsRegistering(true)}>Create an Account</button>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
      )}
    </div>
  );
}

export default App;
