import './App.css'
import {data} from './data/data'
import FormImc from './components/FormIMC'
import { useState } from 'react'

function App() {
  
  const [Imc, setImc] = useState('')

  return (
    <>
      <FormImc />
    </>
  )
}

export default App
