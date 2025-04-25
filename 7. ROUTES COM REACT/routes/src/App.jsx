import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'


function App() {


  return (
      <div className='App'>
        <header>
          <nav>
              <Navbar />
          </nav>
        </header>
        <main>
        <Outlet />
        </main>
        <footer>
        <p>Footer</p>
        </footer>
      </div>
  )
}

export default App
