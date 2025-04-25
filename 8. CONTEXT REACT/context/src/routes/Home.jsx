// Alterando valor
// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"

// Refatorando com hook
import { userCounterContext } from "../hooks/UserCounterContext"

const Home = () => {

  // const {counter} = useContext(CounterContext)
  const {counter} = userCounterContext()

  return (
    <div>
        <h1>Home</h1>
        <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default Home