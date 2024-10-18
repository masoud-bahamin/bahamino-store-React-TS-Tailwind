import { Link } from "react-router-dom"
import { ProductVeiw } from "../../Types";


export const VeiwCard = ({ title, price, thumbnail, id }: ProductVeiw) => {
    return (
        <Link to={`/product/${id}`} className="mx-auto">
            <div className="mb-10">
                <div className="group">
                    <div className="relative w-full rounded-xl mb-[10px]">
                        <img
                            className="rounded-md hover:scale-105 duration-300 w-[312px] h-[312px]"
                            src={`${thumbnail}`}
                            alt="card image"
                        />
                        <div className="absolute top-5 left-5 right-5 w-[270px]">
                            <div className=" flex justify-between">
                                {id === 1 || id === 2 ? (<p className="bg-[#01AD5A] text-white py-[6px] px-[10px] text-xs rounded h-fit">New</p>
                                ) : id === 3 ? (<p className="bg-[#F5813F] text-white py-[6px] px-[10px] text-xs rounded h-fit">Sales</p>) : (<div></div>)}
                                <div className=" group-hover:flex p-2 rounded-lg bg-[rgba(250,250,250,.8)] hover:bg-primary hidden items-center justify-center w-fit duration-200 group">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6 text-sm text-bold hover:text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" w-[312px] text-bold flex items-center">
                    <div>
                        <h5 className="hover:text-primary">
                            {title}
                        </h5>
                        <p className="text-lg font-semibold">
                            ${price}
                        </p>
                    </div>
                    <div className="ml-auto">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="44"
                            height="45"
                            fill="none"
                            viewBox="0 0 44 45"
                            className="hover:fill-primary group text-white"
                        >
                            <rect className=" group-hover:fill-primary" width="44" height="44" y="0.5" fill="#F0F2F3" rx="8"></rect>
                            <path
                                className=" group-hover:stroke-white stroke-bold"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M13.52 14.98l1.908.33.882 10.516a1.65 1.65 0 001.65 1.515h10.001a1.65 1.65 0 001.635-1.417l.871-6.011a1.229 1.229 0 00-1.041-1.394c-.059-.006-13.692-.01-13.692-.01M23.948 21.895h2.542"
                            ></path>
                            <path
                                fill="#272343"
                                fillRule="evenodd"
                                className=" group-hover:stroke-white stroke-bold"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M17.558 30.52a.5.5 0 01.48.693.497.497 0 01-.957-.195.499.499 0 01.477-.499zM27.899 30.52a.5.5 0 110 .999.5.5 0 010-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>
        </Link>
    );
};
