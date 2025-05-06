import React, { useState } from "react";

const Register = ({ onRegister }) => {
  const [form, setForm] = useState({ username: "", password: "", confirmPassword: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    onRegister({ username: form.username, password: form.password, email: form.email });
    setForm({ username: "", password: "", confirmPassword: "", email: "" });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" type="text" placeholder="Username" value={form.username} onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
      <input name="confirmPassword" type="password" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
