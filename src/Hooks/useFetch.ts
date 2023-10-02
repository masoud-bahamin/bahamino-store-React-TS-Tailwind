import { useState, useEffect } from "react"
import { myAxios } from "../Sevises/Axios/confige"

type dataType = { products?: ProductType[] } | null

export const useFetch = (url: string) => {
    const [data, setData] = useState<dataType>(null)
    const [error, setError] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(true)

    const getData = async () => {
        try {
            const response = await myAxios.get(url)
            setData(response.data)
            setLoading(false)
        } catch (error) {
            console.log(error);
            const error2 = error as { message: string }
            setError(error2.message!)
            setLoading(false)
        }
    }

    useEffect(() => { getData() }, [])

    return { data, error, loading }
}