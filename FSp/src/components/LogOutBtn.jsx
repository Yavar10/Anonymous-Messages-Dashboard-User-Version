import axios from "axios";
import { toast } from "react-toastify";


const LogOutBtn = () => {

const logOutHandler = async () => {
   const id=localStorage.getItem("Uid")
  try {
    const res = await axios.post(
      "http://localhost:7000/logOut",{id}
   
    );
    console.log(localStorage.getItem("Uid"))

    console.log("LogOut Success:", res.data);
    toast.success("Logged out successfully!");
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

export default LogOutBtn
