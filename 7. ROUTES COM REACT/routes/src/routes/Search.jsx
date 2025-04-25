import { useFetch } from '../../hooks/useFetch'

import { Link, useSearchParams } from "react-router-dom"


const Search = () => {
    
    // filtar parametros
    const [searchParams] = useSearchParams();
    
    const url = 'http://localhost:4000/products?' + searchParams;
    
    const {data} = useFetch(url);

  return (
    <div>
        <h1>Resultados da pesquisa:</h1>
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

export default Search