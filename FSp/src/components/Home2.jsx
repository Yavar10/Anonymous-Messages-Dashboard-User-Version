import { useState, useEffect } from "react";
import Create from "./Create";
import "./css/Home.css"
import axios from "axios";
import { toast } from 'react-toastify';

function Home2() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    console.log("FETTTTCHIIIIIIIIIIIIIIINGGGGGGGGGGGGGGGGGGG")
    axios
      .get("http://localhost:7000/get")
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  };

  const deltask=(dt)=>{
    const id=dt._id;
    const ownid=dt.owner;
    const token= localStorage.getItem("accessToken");
    console.log(`XXXXXXX ${id} ${ownid}` )
    axios
      .delete("http://localhost:7000/del", {
      data: {_id: id },
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => {
      console.log("Deleted:", res.data);
      toast.success("Deletion successful!");
      fetchTodos(); // <-- refresh the list
    })
    .catch((err) => {console.log(err.message)
      toast.error(`You can only Delete your own chirps`);
    });
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    
    <div>
      <h1>Anonymous Chirp</h1>
      <Create onTaskAdded={fetchTodos} /> {/* <-- FIXED HERE */}
    </div>
  );
}

export default Home2;