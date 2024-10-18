import { memo, useContext } from "react";
import { Link } from "react-router-dom"
import { productContext } from "../../Contexts/ProductContext";
import { ProductType } from "../../Types";

const CartBox = ({ title, price, thumbnail, id, count }: ProductType) => {

    const context = useContext(productContext)

    return (
        <>
            <div className="bg-white rounded-full -mb-7 p-1 w-fit hover:scale-110 cursor-pointer" onClick={() => context.removeProduct(id)}>
                <svg height="20" width="20" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" >
                    <path d="m7.5 7.5l6 6m0-6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            </div>
            <div className="mb-2 border border-gray-200 hover:shadow duration-200 rounded-xl flex justify-between p-4 bg-white">
                <Link to={`/product/${id}`} className="relative rounded-xl">
                    <img
                        className="rounded-xl hover:scale-105 duration-300 w-20 h-16"
                        src={thumbnail}
                        alt="card image"
                    />
                </Link>
                <Link to={`/product/${id}`}>
                    <h5 className="text-primary font-medium text-sm">
                        {title}
                    </h5>
                    <p className="text-xs mt-2">count :  {count || 1}</p>
                </Link>
                <small className="text-xs font-light text-primary line-clamp-1">
                    ${price}
                </small>
            </div>
        </>
    );
};

export default memo(CartBox)