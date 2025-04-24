import './App.css'
import MyForm from './components/MyForm'

function App() {
  return (
    <>
      <div className='App'>
        <h1>Form em react</h1>
        <MyForm  userName="João Pedro" userEmail="joaomelanes12@gamil.com" />
      </div>
    </>
  )
}

export default App
