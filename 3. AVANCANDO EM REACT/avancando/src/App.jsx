import './App.css'

// imagem em assets
import night from './assets/night.jpg'

// useStates
import Data from './components/Data'

function App() {
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
      </div>
    </>
  )
}

export default App
