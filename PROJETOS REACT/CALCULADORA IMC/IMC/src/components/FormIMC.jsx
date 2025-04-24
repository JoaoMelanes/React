import { useState } from "react"
import './FormIMC.css'
import Button from "./Button"

const FormPeso = () => {
    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')

    const validDigits = (text) => {
        return text.replace(/[^0-9,]/g, '')
    }

    const handleAltura = (e) => {
        const updatedValue = validDigits(e.target.value)
        setAltura(updatedValue)
    }

    const handlePeso = (e) => {
        const updatedValue = validDigits(e.target.value)
        setPeso(updatedValue)
    }

    
    const clear = (e) => {
        e.preventDefault()
        setAltura('')
        setPeso('')
    }

  return (
    <div className="container">
        <div className="title">
            <h1 id="title">Calculadora de IMC</h1>
        </div>
        <form className="form-container">
            <label>
                <span>Altura:</span>
                <input type="number" name="altura" placeholder="Exemplo 1.75" onChange={handleAltura} value={altura}/>
            </label>

            <label>
                <span>Peso:</span>
                <input type="number" name="peso" placeholder="Exemplo 70.5" onChange={handlePeso} value={peso}/>
            </label>  
            <div className="container-btn">  
                <Button id="calc-btn" text='Calcular' />
                <Button id="clear-btn" text='Limpar' action={clear}/>
            </div>
        </form>
    </div>
  )
}

export default FormPeso