import { useState } from "react"

const Data = () => {

    let someData = 10
    const [anotherNumber, setAnotherNumber] = useState(15)

  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = 15)}>Mudar variavel</button>
        </div>
        <div>
            <p>Valor: {anotherNumber}</p>
            <button onClick={() => setAnotherNumber(10)}>Mudar variavel</button>
        </div>
    </div>
  )
}

export default Data