import React from 'react'
import { toast } from "react-toastify";

const LogOutBtnF = () => {

    const logOutHandler = async () => {
   const id=localStorage.getItem("accessToken")
   
  try {
    localStorage.removeItem("accessToken")
    toast.success(`Logged out successfully!${id}`);
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
