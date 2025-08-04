import React, { useState } from "react";
import "./css/LoginForm.css"
import axios from "axios";
import { toast } from "react-toastify";

function RegForm() {
    const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

 
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:7000/reg",
      formData/* ,
      {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true // Required for cookies to be set
      } */
    );
    const data = res.data;

    console.log("Sign Up Success:", data);
    toast.success("Signed Up successfully!");
  } catch (err) {
    console.error("Login Error:", err.response?.data?.message || err.message);
    toast.error(err.response?.data?.message || "Sign up failed");
  }
};



  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1>SignUp</h1>
      <input
        type="email"
        name="email"
        className="text"
        placeholder="Email"
        required
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="text"
        required
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">SignUp</button>
    </form>
  );
}

export default RegForm
