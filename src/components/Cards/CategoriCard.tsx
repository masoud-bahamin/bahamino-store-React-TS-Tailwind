import { Link } from "react-router-dom"
import { CategoryVeiw } from "../../Types";

export const CategoriCard = ({ title, products, thumbnail, id }: CategoryVeiw) => {
    return (
        <>
            <div className="mb-10">
                <div className="group">
                    <div className="relative w-full rounded-xl mb-[10px]">
                        <img
                            className="rounded-[10px] hover:scale-105 duration-300 w-[424px] h-[424px]"
                            src={thumbnail}
                            alt="card image"
                        />
                        <div className="absolute bottom-0 w-full bg-[rgba(0,0,0,.7)] p-5 text-white rounded-b-[10px]">
                            <Link to={`/product/${id}`} className="font-semibold text-xl">{title}</Link>
                            <p className="text-sm">{products} Products</p>
                        </div>
                    </div>
                </div>
               
            </div>
        </>
    );
};
