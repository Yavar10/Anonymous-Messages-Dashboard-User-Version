
import './App.css'
import Home from './components/Home.jsx'
import LForm from './components/LoginForm.jsx'
import RForm from './components/RegForm.jsx'
import LogOutBtn from './components/LogOutBtn.jsx'
import { ToastContainer } from 'react-toastify';
import LogOutBtnF from './components/LogOutBtnF.jsx'

function App() {

  return (
    <div className='app'>
      
      <RForm/>
      <LForm/>
      <Home/>
      <LogOutBtnF/>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default App
