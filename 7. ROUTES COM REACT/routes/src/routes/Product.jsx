import { useFetch } from "../../hooks/useFetch"
import { useParams , Link} from "react-router-dom"

const Product = () => {
    const {id} = useParams();

    const url = "http://localhost:4000/products/" + id;

    const {data} = useFetch(url) ;

    if(!data) return <p>Carregando...</p>

  return (
    <div>
        <p>ID do produto: {id}</p>
        <div>
            <h1>{data.name}</h1>
            <p>R$: {data.price}</p>

            {/* nested routes */}
            <Link to={`/products/${data.id}/info`}>Mais informações</Link>
        </div>
    </div>
  )
}

export default Product