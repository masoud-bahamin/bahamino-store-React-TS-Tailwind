import { ReactNode, useContext } from "react"
import { ProductType } from "../../Types"
import { productContext } from "../../Contexts/ProductContext"


function AddToBasket({ product, children }: { product: ProductType, children: ReactNode }) {

    const { addToBasket } = useContext(productContext)

    return (
        <button onClick={() => {addToBasket(product)}}>
            {children}
        </button>
    )
}

export default AddToBasket