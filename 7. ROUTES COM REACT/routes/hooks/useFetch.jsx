import { useState, useEffect } from "react";

// Custom hooks

export const useFetch = (url) => {
    // Resgatando Dados da API
    const [data, setData] = useState(null)
    
    // Refatorando Post
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setFetch] = useState(null)

    // loading
    const [loading, setLoading] = useState(false)

    // Error
    const [error, setError] = useState(null)

    const httpConfig = (data, method) => {
        if(method === "POST"){
            setConfig({
                method,
                Headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(data)
            })

            setMethod(method)
        }
    }

    // Resgatando Dados da API
    useEffect(() => {
        
        const fetchData = async () => { 

            // Tratando errors
            try{
                setLoading(true)
    
                const res = await fetch(url)
                const json = await res.json()
    
                setData(json)  
            }
            catch(error){
                console.log(error.message)
                setError("Houve algum erro ao carregar os dados!")
            }
            setLoading(false)
        }
        fetchData()
    }, [url, callFetch])

    // refatorando post
    useEffect(() => {
        
        const httpRequest = async () => {
            let json

            if(method === "POST"){

                setLoading(true)

                let fetchOption = [url, config]

                const res = await fetch(...fetchOption)
                json = await res.json()

                setLoading(false)
            }

            setFetch(json)
        }

        httpRequest()

    }, [config, method, url])

    return {data, httpConfig, loading, error}
}