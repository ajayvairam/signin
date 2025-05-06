import React, { useState } from "react";
import Login from './Login';
import Register from './Register';
import Profile from './Profile'; // Assuming you have this component for profile display
import Dashboard from './Dashboard'; // Assuming you have a dashboard component
import usersJSON from './users.json'; // A sample JSON file containing user data
import './App.css';

function App() {
  const [users, setUsers] = useState(usersJSON);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (username, password) => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      setIsLoggedIn(true);
      setLoggedInUser(user);
      setErrorMessage("");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  const handleRegister = (newUser) => {
    setUsers([...users, newUser]);
    setShowRegister(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoggedInUser(null);
  };

  const toggleForm = () => {
    setShowRegister(!showRegister);
    setErrorMessage(""); // Clear error message on form switch
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <div className="navbar">
            <h2>Welcome Back!</h2>
            <Profile user={loggedInUser} onLogout={handleLogout} />
          </div>
          <Dashboard />
        </>
      ) : (
        <div className="login-page">
          <div className="login-container">
            <h2>{showRegister ? "Register" : "Login"}</h2>
            {showRegister ? (
              <Register onRegister={handleRegister} toggleForm={toggleForm} />
            ) : (
              <Login onLogin={handleLogin} toggleForm={toggleForm} />
            )}
            {errorMessage && <div className="error-message">{errorMessage}</div>}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
