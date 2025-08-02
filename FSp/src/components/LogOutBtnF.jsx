import React from 'react'
import { toast } from "react-toastify";

const LogOutBtnF = () => {

  const logOutHandler = async () => {
   localStorage.getItem("accessToken")
   
  try {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("userId")
    toast.success(`Logged out successfully!`);
    window.location.reload();
  } catch (err) {
    console.error("Login Error:", err.response?.data?.message || err.message);
    toast.error(err.response?.data?.message || "Logout failed");
  }
};
  return (
    <div>
       <button onClick={()=>{logOutHandler()}}>LogOut</button>
    </div>
  )
}

export default LogOutBtnF
