
import './App.css'
import MyComponents from './components/MyComponents'
import Title from './components/Title'

function App() {
  // inline dinamica
  const n = 11

  // class dinamica
  const redtitle = true

  return (
    <>
      {/* css global */}
      <h1>CSS GLOBAL</h1>

      {/* CSS componente */}
      <MyComponents />
      <p>pegou o css do componente</p>

      {/* inline style */}
      <p style={{color: "blue", padding:"10px", borderBottom:'1px solid red'}}>Este elemento tem estilos inline</p>

      {/* inline style dinamico */}
      <h2 style={n > 10 ? {color: 'purple'} : {color: 'blue'}}> CSS dinamico</h2>
      <h2 style={n > 20 ? {color: 'purple'} : {color: 'blue'}}> CSS dinamico 2</h2>

      {/* classes dinamicas */}
      <h2 className={redtitle ? "red-title" : "title"}>Este titulo vai ter uma classe dinamica</h2>

      {/* CSS module */}
      <Title />
    </>
  )
}

export default App
