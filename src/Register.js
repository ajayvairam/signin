import React, { useState } from "react";

const Register = ({ onRegister, toggleForm }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    onRegister({
      username: formData.username,
      password: formData.password,
      email: formData.email,
    });
    setFormData({ username: "", password: "", confirmPassword: "", email: "" });
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        required
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        required
      />
      <button type="submit" className="blue-button">Register</button>

      <button
        type="button"
        className="blue-button"
        onClick={toggleForm}
      >
        Already have an account? Login
      </button>

      {error && <div className="error-message">{error}</div>}
    </form>
  );
};

export default Register;
