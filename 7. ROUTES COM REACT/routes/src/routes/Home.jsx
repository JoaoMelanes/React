import { useFetch } from '../../hooks/useFetch'
const url = 'http://localhost:4000/products'

// rota dinamica
import { Link } from 'react-router-dom'

const Home = () => {

  const {data} = useFetch(url)

  return (
    <div>
        <h1>Home</h1>
        {/* Carregamento de dados */}
        <ul className="products">
          {data && data.map((items) => (
            <li key={items.id}>
              <h2>{items.name}</h2>
              <p>R$: {items.price}</p>
              {/* Rota dinamica */}
              <Link to={`/products/${items.id}`}>Detalhes</Link>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Home