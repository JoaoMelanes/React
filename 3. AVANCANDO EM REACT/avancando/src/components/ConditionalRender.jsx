import React from 'react'

const ConditionalRender = () => {

    const x = true

    const name = 'mathues'

  return (
    <div>
        {/* render condicional */}
        <h3>Isso será exibido?</h3>
        {x && <p>Se x for true sim</p>}

        {/* render ternario */}
        {name === 'João' ? (
            <div>
                <p>Olá {name}</p>
            </div>
        ) : (
            <div>
                <p>Olá não encontrado</p>
            </div>
        )}
    </div>
  )
}

export default ConditionalRender