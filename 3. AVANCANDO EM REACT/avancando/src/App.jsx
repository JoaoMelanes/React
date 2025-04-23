import './App.css'

// imagem em assets
import night from './assets/night.jpg'
import ConditionalRender from './components/ConditionalRender'

// useStates
import Data from './components/Data'

// Render list
import ListRender from './components/ListRender'

// props
import ShowUserName from './components/ShowUserName'

// Destruction props
import CarDetails from './components/CarDetails'

// fragments
import Fragment from './components/Fragment'

// children
import ScheneWhite from './components/ScheneWhite'

// Renderização de lista com componentes
const cars = [
  {id: 1, brand:"bmw", color:"black", km: 0},
  {id: 2, brand:"ferrari", color:"red", km:50000},
  {id: 3, brand:"volvo", color:"white", km:1000},
]

// função em prop
import ExecuteFunction from './components/ExecuteFunction'
import { useState } from 'react'

// State lift
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'

function App() {

  function showMessage(){
    console.log("Evento do componente pai")
  }

  // state lift
  const [message, setMessage] = useState('')

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <>
      <div className='App' style={{paddingBottom:"500px"}}>
        <h1>Hello world</h1>
        {/* Imagem em public */}
        <img src="/img.jpg" alt="Alguma coisa" />
        
        {/* Imagem em assets */}
        <img src={night} alt="Outra imagem" />

        {/* Hook useStates */}
        <Data />

        {/* List render */}
        <ListRender />

        {/* Render condicional */}
        <ConditionalRender />

        {/* Props */}
        <ShowUserName name="João" />

        {/* Destruturando props */}
        <CarDetails brand="VOLVO" km={10.000} color="Black"/>

        {/* Reaproveitando componentes */}
        <CarDetails brand="BMW" km={1.000} color="Red"/>
        <CarDetails brand="Ferrari" km={5.000} color="White"/>

        {/* Rederizando componentes com map */}
        {cars.map((car) => (
          <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} />
        ))}

        {/* Fragementos */}
        <Fragment />

        {/* children */}
        <ScheneWhite>
          <p>BgColor</p>
        </ScheneWhite>

        {/* Função com props */}
        <ExecuteFunction myFunction={showMessage}/>

        {/* State lift */}
        <Message msg={message}/>
        <ChangeMessage handleMessage={handleMessage}/>
        
      </div>
    </>
  )
}

export default App
