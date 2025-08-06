import { useState } from "react"
import "./css/Create.css"
//import {fetchTodos} from "Home.jsx"
import axios from 'axios'
import { toast } from 'react-toastify';


function Create({onTaskAdded}) {

    const[task,setTask]=useState()

   const handleCreate = () => {
  if (!task.trim()) return;

  const token = localStorage.getItem("accessToken");
  console.log("🟢 Token from create localStorage:", token);

  axios.post(
    "https://anonymous-messages-dashboard-user-version.onrender.com/add",
    { task },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )
  .then(() => {
    setTask("");
    onTaskAdded();
    toast.success("Chirp successful!");
  })
  .catch((err) => {
    console.log(err);
    toast.error("Oops! Something went wrong.");
  });
};

  return (
    <div className="container">
      <textarea
        type="text"
        placeholder="Enter stuff"
        className="text"
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="Cbtn" onClick={handleCreate}>Submit</button>
     {/*  <div className="display-task">{task}</div> */}
    </div>
  )
}

export default Create
