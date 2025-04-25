// Alterando valor
// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"

import ChangeCounter from "../../components/ChangeCounter"
// Refatorando com hook
import { userCounterContext } from "../hooks/UserCounterContext"

const Contact = () => {

  // const {counter} = useContext(CounterContext)
  const {counter} = userCounterContext()

  return (
    <div>
        <h1>Pagina de contato</h1>
        <p>Valor do contador: {counter}</p>
        <ChangeCounter />
    </div>
  )
}

export default Contact