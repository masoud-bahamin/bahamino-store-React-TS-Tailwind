import { useReducer } from "react"

const intialValue: ProductType[] = []

type actionType = {
    type: "add" | "remove";
    product: ProductType;
}

const reduser = (state: ProductType[], action: actionType) => {
    switch (action.type) {
        case "add": 
            return [...state, action.product]
        
        case "remove": 
            return []
        
        default: {
            throw new Error("Invalid Action Type !!");
        }

    }
}


const useProduct = () => {
    const [products, dispatch] = useReducer(reduser, intialValue)

    const addToBasket = (product: ProductType) => {
        dispatch({ type: "add", product })
    }
    const removeBasket = (product: ProductType) => {
        dispatch({ type: "remove", product })
    }

    return { products, addToBasket , removeBasket }
}

export default useProduct