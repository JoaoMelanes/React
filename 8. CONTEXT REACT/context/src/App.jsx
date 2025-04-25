import Navbar from '../components/Navbar'
import {Outlet} from "react-router-dom"
import './App.css'

function App() {

  return (
      <div className='App'>
        <Navbar />
        <h1>Context API</h1>
        <Outlet />
      </div>
  )
}

export default App
