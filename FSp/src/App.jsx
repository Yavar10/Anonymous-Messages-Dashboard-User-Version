
import './App.css'
import Home from './components/Home.jsx'
import LForm from './components/LoginForm.jsx'
import RForm from './components/RegForm.jsx'
import LogOutBtn from './components/LogOutBtn.jsx'
import Wall from './components/Wall.jsx'
import { ToastContainer } from 'react-toastify';
import { useState } from 'react'
import LogOutBtnF from './components/LogOutBtnF.jsx'
import Home2 from './components/Home2.jsx'

function App() {
const [page, whatpage] = useState(0)
const username=localStorage.getItem("userId");
if(page===0){
  return (
     <div className='fullcontainer'>
      <div className="nav">
      <button className='navbtn' onClick={()=>{whatpage(3)}}>HOME</button>
      <button className='navbtn' onClick={()=>{whatpage(1)}}>Sign Up</button>
      <button className='navbtn' onClick={()=>{whatpage(2)}}>Login</button>
        <button className='navbtn' onClick={()=>{whatpage(4)}}>Wall</button>
      </div>
      <div className='main-content'>
      <Home2/>
      </div>
      {
      localStorage.getItem("userId")?(
      <div className="logout">
      <div className='username'>👤</div>
      <LogOutBtnF/>
      </div>):(
        <p></p>
      )
      }
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}
else if(page===1){
  return (
    <div className='fullcontainer'>
  <div className="nav">
      <button className='navbtn' onClick={()=>{whatpage(0)}}>HOME</button>
      <button className='navbtn' onClick={()=>{whatpage(1)}}>Sign Up</button>
      <button className='navbtn' onClick={()=>{whatpage(2)}}>Login</button>
        <button className='navbtn' onClick={()=>{whatpage(4)}}>Wall</button>
      </div>
      <RForm/>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}
else if(page===2){
  return (
  <div className='fullcontainer'>
     <div className="nav">
      <button className='navbtn' onClick={()=>{whatpage(0)}}>HOME</button>
      <button className='navbtn' onClick={()=>{whatpage(1)}}>Sign Up</button>
      <button className='navbtn' onClick={()=>{whatpage(2)}}>Login</button>
      <button className='navbtn' onClick={()=>{whatpage(4)}}>Wall</button>
      </div>
      <LForm/>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}
else if(page===4){
  return (
    <div className='fullcontainer'>
      <div className="nav">
      <button className='navbtn' onClick={()=>{whatpage(0)}}>HOME</button>
      <button className='navbtn' onClick={()=>{whatpage(1)}}>Sign Up</button>
      <button className='navbtn' onClick={()=>{whatpage(2)}}>Login</button>
      <button className='navbtn' onClick={()=>{whatpage(4)}}>Wall</button>
      </div>
      <div>
      <h1>THE WALL</h1>
      </div>
      <div className='main-content-wall'>
      <Wall/>
      <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </div>
  )
}
}

export default App
