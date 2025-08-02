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
    "http://localhost:7000/add",
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
    <div>
    <input type="text" placeholder="Enter stuff" className="text" onChange={(e)=>setTask(e.target.value)} />
    <button onClick={handleCreate}>Submit</button>
    <div>{task}</div>
    </div>
  )
}

export default Create
