import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
// Search params
import SearchForm from '../components/SearchForm'


function App() {


  return (
      <div className='App'>
        <header>
          <nav>
              <Navbar />
              <SearchForm />
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
