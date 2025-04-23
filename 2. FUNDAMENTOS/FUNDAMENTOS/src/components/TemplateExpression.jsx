
const TemplateExpression = () => {

    const a = 10
    const b = 5
    const name = 'João Pedro'
    const data = {
        age: 21,
        job: "Programador"
    }

  return (
    <div>
        <h2>Template expression</h2>
        <p>a soma é {a + b}</p>

        <p>O seu nome é {name}</p>
        <p>Você tem {data.age} anos, e é {data.job}</p>

    
    </div>
  )
}

export default TemplateExpression