
import './App.css'
import Home from './components/Home.jsx'
import LForm from './components/LoginForm.jsx'
import RForm from './components/RegForm.jsx'
import LogOutBtn from './components/LogOutBtn.jsx'
import { ToastContainer } from 'react-toastify';
import { useState } from 'react'
import LogOutBtnF from './components/LogOutBtnF.jsx'

function App() {
const [page, whatpage] = useState(0)
const username=localStorage.getItem("userId");
if(page===3){
  if(localStorage.getItem("userId")){
  return (
    <div>
      <div>
        <h1>
          {username}
        </h1>
      </div>
      <div>
      <button onClick={()=>{whatpage(3)}}>HOME</button>
      <button onClick={()=>{whatpage(1)}}>Sign Up</button>
      <button onClick={()=>{whatpage(2)}}>Login</button>
    </div>
      <Home/>
      <LogOutBtnF/>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )}
  else{
  return (
    <div>
      <div>
        <h1>
          {username}
        </h1>
      </div>
      <div>
      <button onClick={()=>{whatpage(3)}}>HOME</button>
      <button onClick={()=>{whatpage(1)}}>Sign Up</button>
      <button onClick={()=>{whatpage(2)}}>Login</button>
    </div>
      <Home/>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )}
}
else if(page===1){
  return (
    <div>
      <div>
      <button onClick={()=>{whatpage(3)}}>HOME</button>
      <button onClick={()=>{whatpage(1)}}>Sign Up</button>
      <button onClick={()=>{whatpage(2)}}>Login</button>
    </div>
      <RForm/>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}
else if(page===2){
  return (
    <div>
      <div>
      <button onClick={()=>{whatpage(3)}}>HOME</button>
      <button onClick={()=>{whatpage(1)}}>Sign Up</button>
      <button onClick={()=>{whatpage(2)}}>Login</button>
    </div>

      <LForm/>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}
else if(page===0){
  return (
    <div>
      <div>
        <h1>
          {username}
        </h1>
      </div>
      <div>
      <button onClick={()=>{whatpage(3)}}>HOME</button>
      <button onClick={()=>{whatpage(1)}}>Sign Up</button>
      <button onClick={()=>{whatpage(2)}}>Login</button>
    </div>
      <Home/>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}
}

export default App
