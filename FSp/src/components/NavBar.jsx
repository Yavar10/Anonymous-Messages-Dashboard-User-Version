import React from 'react'

import whatpage from "../App"
function NavBar() {
  return (
    <div>
      <button onClick={()=>{whatpage(3)}}>HOME</button>
      <button onClick={()=>{whatpage(1)}}>Sign Up</button>
      <button onClick={()=>{whatpage(2)}}>Login</button>
    </div>
  )
}

export default NavBar
