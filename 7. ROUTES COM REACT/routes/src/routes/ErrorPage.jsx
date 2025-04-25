import { useRouteError } from "react-router-dom"

const ErrorPage = () => {

    const error = useRouteError()

    console.log(error)

  return (
    <div>
        <h1>Opss... ERROR:{error.statusText}</h1>
        <p>Temos um problema!</p>
        <p>{error.error.message}</p>
    </div>
  )
}

export default ErrorPage