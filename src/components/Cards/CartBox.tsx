import { memo, useContext } from "react";
import { Link } from "react-router-dom"
import { productContext } from "../../Contexts/ProductContext";

const CartBox = ({ title, price, thumbnail, id }: ProductType) => {

    const context = useContext(productContext)

    return (
        <>
            <p className="bg-white rounded-full p-1 px-2 w-fit hover:scale-110 cursor-pointer" onClick={() => context.removeProduct(id)}>X</p>
            <div className="mb-5 shadow-xl hover:shadow duration-200 rounded-xl flex justify-between p-4 bg-white">
                <div className="relative rounded-xl">
                    <img
                        className="rounded-xl hover:scale-105 duration-300 w-20 h-16"
                        src={thumbnail}
                        alt="card image"
                    />
                </div>
                <Link to={`/product/${id}`}>
                    <h5 className="text-primary font-medium text-sm">
                        {title}
                    </h5>
                </Link>
                <small className="text-xs font-light text-primary line-clamp-1">
                    ${price}
                </small>
            </div>
        </>
    );
};

export default memo(CartBox)