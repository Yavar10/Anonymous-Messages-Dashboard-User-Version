import React from 'react'
import axios from 'axios';
import "./css/Home.css"
import { useEffect,useState } from 'react';
import { toast } from 'react-toastify';
const Wall = () => {
    const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    console.log("FETTTTCHIIIIIIIIIIIIIIINGGGGGGGGGGGGGGGGGGG")
    axios
      .get("https://anonymous-messages-dashboard-user-version.onrender.com/get")
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
      fetchTodos();
    }, []);
const deltask=(dt)=>{
    const id=dt._id;
    const ownid=dt.owner;
    const token= localStorage.getItem("accessToken");
    console.log(`XXXXXXX ${id} ${ownid}` )
    axios
      .delete("https://anonymous-messages-dashboard-user-version.onrender.com/del", {
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

  const delAll=()=>{
    const token= localStorage.getItem("accessToken");
    console.log("DELETTIIIIIIIIIIIIINGGGGGGGGGGGGGGGGGGG ALLLLLLLLLLLLLLLLLLLLL")
    axios
      .delete("https://anonymous-messages-dashboard-user-version.onrender.com/deleteAll", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => {
      console.log("Deleted: ALL", res.data);
      toast.success("All Deletion successful!");
      fetchTodos(); // <-- refresh the list
    })
    .catch((err) =>{ console.log(err)
      toast.error("Not Authoried!");
    });
  }
  return (
    <div>{
      localStorage.getItem("userId")==="admin@gmail.com"?( <button className='dba' onClick={()=>delAll()}>DELETE ALL</button>):(<p></p>)
      }
        
      {
      todos.length === 0 ? (
        <div>
          <h3>No Chirps Heard</h3>
        </div>
      ) : (
        todos.map(todo => (
         
          <div className="tk" key={todo._id}>
           <div className="dot">•</div> 
          {todo.task}
          <button className="db" onClick={()=>deltask(todo)}>
          🗑️
          </button></div>
     
        ))
      )
      }
    </div>
  )
}

export default Wall
