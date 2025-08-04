import React, { useState } from "react";
import "./css/LoginForm.css"
import axios from "axios";
import { toast } from "react-toastify";

function LoginForm() {
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
      "http://localhost:7000/login",
      formData,
      {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true // Required for cookies to be set
      }
    );
    const tok=res.data.data.accessToken;
console.log("🔐 Login response:", tok);

    const data = res.data;

    // Assuming your backend sends refresh token in response like: { refreshToken: "..." }
    if (tok) {
    localStorage.setItem("accessToken", tok); // ✅ Correct
    const token= localStorage.getItem("accessToken"); // ✅ Correct
    console.log("🟢 Token from localStorage:", token);
    }

    localStorage.setItem("userId",res.data.data.user.email);
    console.log("Login Success:", data);
    console.log("Login Success:", res.data.data.user.email);
    toast.success("Logged in successfully!");
  } catch (err) {
    console.error("Login Error:", err.response?.data?.message || err.message);
    toast.error(err.response?.data?.message || "Login failed");
  }
};



  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="text"
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
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
