import { useState } from "react"
import './FormIMC.css'

const FormPeso = () => {
    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')

    const handleAltura = (e) => {
        setAltura(e.target.value)
    }

    const handlePeso = (e) => {
        setAltura(e.target.value)
    }

    
    const handleSubmit = (e) => {
        e.preventDefault()

        if(e.target.value === "Calcular"){
            setAltura('')
            setPeso('')
        }
    }

  return (
    <div className="container">
        <h1>Calculadora de IMC</h1>
        <form className="form-container" onSubmit={handleSubmit}>
            <label>
                <span>Altura:</span>
                <input type="number" name="altura" placeholder="Exemplo 1.75" onChange={handleAltura}/>
            </label>

            <label>
                <span>Peso:</span>
                <input type="number" name="altura" placeholder="Exemplo 70.5" onChange={handlePeso}/>
            </label>  
            <div className="container-btn">  
                <input type="submit" value="Calcular"/>
                <button type="submit">Limpar</button>
            </div>
        </form>
    </div>
  )
}

export default FormPeso