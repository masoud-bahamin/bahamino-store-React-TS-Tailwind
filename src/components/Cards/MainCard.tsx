import {Link} from "react-router-dom"

export const MainCard = ({ title, price, thumbnail, rating,description , id}: ProductType) => {
    return (
        <Link to={`/product/${id}`}>
            <div className="my-5 shadow-xl hover:shadow duration-200 rounded-xl">
                <div className="relative w-full rounded-xl">
                    <img
                        className="rounded-xl hover:scale-105 duration-300 w-80 h-64"
                        src={thumbnail}
                        alt="card image"
                    />
                    <div className="absolute bottom-3 left-4 flex items-center space-x-2">
                        <span className="p-1.5 rounded-lg bg-white hover:bg-red-500 flex items-center justify-center w-fit duration-200 group">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.5} stroke="currentColor" className="w-6 h-6 text-sm text-red-500 group-hover:text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </span>
                        <span className="p-1.5 rounded-lg bg-white hover:bg-blue-500 flex items-center justify-center w-fit duration-200 space-x-1 group">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.5} stroke="currentColor" className="w-6 h-6 text-sm text-blue-500 group-hover:text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                            </svg>
                            <small className="text-blue-500 group-hover:text-white">{rating.toFixed(0)}</small>
                        </span>
                    </div>
                </div>
                <div className="p-4">
                    <h5 className="text-primary font-medium text-sm">
                        {title}
                    </h5>
                    <small className="text-xs font-light text-primary line-clamp-1">
                       {description}
                    </small>
                    <small className="text-xs font-light text-primary line-clamp-1">
                       ${price}
                    </small>
                </div>
            </div>
        </Link>
    );
};
