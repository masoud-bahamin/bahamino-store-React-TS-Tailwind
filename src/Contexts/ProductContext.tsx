import { ReactNode, createContext, useEffect, useState } from "react"
import { ProductType } from "../Types";

type ProductContextType = {
    basket: ProductType[];
    addToBasket: (product: ProductType) => void
    removeAllProduct: () => void
    removeProduct: (id:number) => void
}

type productContextProp = {
    children: ReactNode
}


export const productContext = createContext({} as ProductContextType)


function ProductContextProvider({ children }: productContextProp) {

    const [basket, setBasket] = useState<ProductType[]>([])

    const addToBasket = (product: ProductType) => {

        if (basket.some(item => item.id === product.id)) {
            return
        }
        localStorage.setItem("basket", JSON.stringify([...basket, product]))
        setBasket(prev => [...prev, product])

    }

    const removeAllProduct = () =>{
        setBasket([])
        localStorage.removeItem('basket')
    }

    const removeProduct = (id:number) => {
        setBasket(prev => {
            const newBasket = prev.filter(product => product.id !== id)
            localStorage.setItem("basket", JSON.stringify(newBasket))
            return newBasket
        })
    }

    const getBasket = () => {
        const basket = localStorage.getItem("basket")

        if (basket) {
            setBasket(JSON.parse(basket))
        }
    }

    useEffect(() => {
        getBasket()
    }, [])


    return (
        <productContext.Provider value={{
            basket, addToBasket , removeAllProduct , removeProduct
        }}>
            {children}
        </productContext.Provider>
    )
}

export default ProductContextProvider