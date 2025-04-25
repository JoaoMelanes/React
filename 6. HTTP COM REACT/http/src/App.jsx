import { useState} from 'react'
import './App.css'
const url = 'http://localhost:4000/products'
import { useFetch } from './hooks/useFetch'

function App() {
  // resgatando dados
  // const [products, setProducts] = useState([])

  // useEffect(() => {
  //   async function getData() {
      
  //     const res = await fetch(url)

  //     const data = await res.json()

  //     setProducts(data)
  //   }

  //   getData()
  // }, [])

  // Custom hooks
  const {data: items, httpConfig, loading, error} = useFetch(url)

  // Inserindo dados
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    // refatorando post
    const product = {
      name,
      price
    }
    await httpConfig(product, "POST");

    setName('')
    setPrice('')

    // const res = await fetch(url , {
    //   method: "POST",
    //   headers: {"Content-Type":"application/json"},
    //   body: JSON.stringify(product)
    // })

    // carregamento dinamico
    // const addedProduct = await res.json()

    // setProducts((prevProducts) => [...prevProducts, addedProduct])
  }

  return (
    <>
     <div className='App'>
        <h1>HTTP EM REACT</h1>
        {/* Loading */}

        {loading && <p>Carregando...</p>}

        {/* Tratando error */}
        {error && <p>{error}</p>}

        {/* Resgatando dados da API */}
        <ul>
            {items && 
              items.map((product) => (
                <li key={product.id}>{product.name} - R${product.price}</li>
            ))}
        </ul>
        {/* Inserindo dados */}
        <div className="add-products">
          <form onSubmit={handleSubmit}> 
            <label>
              <span>Nome do produto: </span>
              <input type="text" name="name" value={name} placeholder='Digite o nome do produto!' onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>
              <span>Preço do produto: </span>
              <input type="text" name="price" value={price} placeholder='Digite o preço do produto!' onChange={(e) => setPrice(e.target.value)}/>
            </label>
            {/* <input type="submit" value="Enviar" /> */}
            {/* Loading Post */}
            {loading ? (<input type='submit' disabled value="Aguarde"/>) : (<input type='submit' value="Criar" />)}
          </form>
        </div>
     </div>
    </>
  )
}

export default App
