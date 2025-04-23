
const Events = () => {

  const handleClick = () => {
    console.log("executou")
  }

  // Função de Renderização
  const renderSomething = (x) =>{
    if(x){
      return <h1>Rederizando isso</h1>
    } else{
      return <h1>Rederizando outra coisa</h1>
    }
  }

  return (
    <div>
      <div>
        <button onClick={() => console.log('Testando evento')}>Clique Aqui</button>
      </div>

      {/* evento com função */}
      <div>
        <button onClick={handleClick}>Clique aqui - com função</button>
      </div>

      {/* função com render*/}
      <div>
        {renderSomething(true)}
        {renderSomething(false)}
      </div>
    </div>
  )
}

export default Events