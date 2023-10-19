import { memo } from "react";
import { Link } from "react-router-dom"
import { initialValuesTypes } from "../../Types";

interface addProductCartProps extends initialValuesTypes{
    imageSrc : string
}

const AddProductCart = ({ title, price,  description ,brand , imageSrc}: addProductCartProps) => {
    return (
        <Link to={`/product/id`}>
            <div className="my-5 shadow-xl hover:shadow duration-200 rounded-xl flex gap-3 p-4 bg-white">
                <div className="relative rounded-xl">
                    <img
                        className="rounded-xl hover:scale-105 duration-300 w-20 h-16"
                        src={imageSrc}
                        alt="card image"
                    />
                </div>
                <div>
                    <div className="flex gap-8 items-center mb-3">
                        <h5 className="text-primary font-medium text-sm">
                            {title}
                        </h5>
                        <small className="text-xs font-light text-primary line-clamp-1">
                            ${price}
                        </small>
                    </div>
                    <p className="text-xs font-light text-primary line-clamp-1">{brand}</p>
                    <p className="text-xs font-light text-primary line-clamp-1">{description}</p>
                </div>



            </div>
        </Link>
    );
};

export default memo(AddProductCart)