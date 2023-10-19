import { useState, useEffect, memo, useContext } from "react"
import Topbar from "./Topbar"
import { Link, NavLink } from "react-router-dom"
import { productContext } from "../../Contexts/ProductContext";
import CartBox from "../Cards/CartBox";
import { userContext } from "../../Contexts/userContext";
import SearcBox from "../SearchBox/SearcBox";


function Header() {

    const [totalPrice, setTotalPrice] = useState(0)
    const [isShowMenu, setIsShowMenu] = useState(false)

    const basketContext = useContext(productContext)

    const UserContext = useContext(userContext)

    useEffect(() => {
        setTotalPrice(basketContext.basket.reduce((prev, cur) => { return prev + cur.price }, 0))
    }, [basketContext])


    return (
        <>
            <Topbar />
            <header className="bg-page border-b">
                <div className="container mx-auto px-4 sm:px-2 flex justify-between xl:gap-20 lg:gap-10 h-[84px] items-center">
                    <NavLink to={'/'}>
                        <img src="/img/logo.png" className="w-32 sm:w-40" width={160} height={40} alt="" />
                    </NavLink>
                    {/* show menu btn in mobil */}
                    <button className="lg:hidden" onClick={() => setIsShowMenu(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>


                    <div className="hidden lg:block">
                        <SearcBox />
                    </div>

                    <div className="flex items-center gap-3 justify-between h-11 text-xs ">
                        <div className="relative group rounded-full mb-1 md:mb-0" id="button_pm">
                            <NavLink to={"/cart"} className="w-20 sm:w-[120px] h-11 bg-white rounded-lg text-bold hover:text-primary flex items-center justify-center gap-1 sm:gap-2 relative" >

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="44"
                                    height="45"
                                    fill="none"
                                    viewBox="0 0 44 45"
                                    className="hover:fill-primary group text-white"
                                >

                                    <path
                                        className=" group-hover:stroke-primary stroke-bold"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M13.52 14.98l1.908.33.882 10.516a1.65 1.65 0 001.65 1.515h10.001a1.65 1.65 0 001.635-1.417l.871-6.011a1.229 1.229 0 00-1.041-1.394c-.059-.006-13.692-.01-13.692-.01M23.948 21.895h2.542"
                                    ></path>
                                    <path
                                        fill="#272343"
                                        fillRule="evenodd"
                                        className=" group-hover:stroke-primary stroke-bold"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M17.558 30.52a.5.5 0 01.48.693.497.497 0 01-.957-.195.499.499 0 01.477-.499zM27.899 30.52a.5.5 0 110 .999.5.5 0 010-1z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <span className="hidden sm:inline-block">Cart</span>
                                <span className=" rounded-full text-center align-middle w-4 h-4 bg-primary text-white">{basketContext.basket?.length}</span>
                                <div className="absolute top-9 z-20 -right-5 sm:right-0 md:right-10  bg-white w-80 sm:w-96 p-5 rounded text-primary hidden group-hover:block">
                                    {
                                        basketContext.basket?.length ? (
                                            <>
                                                {basketContext.basket.map(product => (
                                                    <CartBox key={product.id} {...product} />
                                                ))}
                                            </>

                                        ) : (
                                            <div className="flex justify-center items-center h-32 text-center text-gray-600">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mx-auto w-16 h-16">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                                    </svg>

                                                    <p className="text-center">Your bag is empty</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                    <div className="bg-white my-5 shadow-xl hover:shadow duration-200 rounded-xl flex justify-between p-4">
                                        <div className="relative rounded-xl">
                                            Total
                                        </div>
                                        <h5 className="text-primary font-medium text-sm">
                                            ---
                                        </h5>
                                        <small className=" ">
                                            ${totalPrice}
                                        </small>
                                    </div>
                                    <button onClick={() => basketContext.removeAllProduct()}
                                        className="px-4 py-2 rounded hover:bg-primary bg-white text-slate-900 border border-primary text-xs float-right">Clear Bag</button>
                                </div>
                            </NavLink>
                        </div>
                        <div className="hidden sm:block relative group rounded-full mb-1 md:mb-0" >
                            <Link to={"/"} className=" w-11 h-11 bg-white rounded-lg text-bold hover:text-primary flex items-center justify-center gap-2 relative" >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-[22px] h-[22px]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>

                            </Link>
                        </div>
                        <div className="hidden sm:block relative group rounded-full mb-1 md:mb-0" >
                            <Link to={"/"} className=" w-11 h-11 bg-white rounded-lg text-bold hover:text-primary flex items-center justify-center gap-2 relative" >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-[22px] h-[22px]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>

                            </Link>
                        </div>
                    </div>

                </div>
                <div className={`${isShowMenu ? "top-0 " : "-top-96"} w-full absolute lg:static z-20 transition-all duration-500 left-0 bg-white  items-center`}>
                    <div className="flex p-3 lg:hidden">
                        <button className="ml-auto" onClick={() => setIsShowMenu(false)}>X</button>
                    </div>
                    <nav className=" h-[75] bg-white flex items-center text-sm py-[14px] text-bold">
                        <div className="container mx-auto px-4 sm:px-2 lg:inline-flex" id="main_menu">
                            <div className="border py-4 px-6 group rounded-md " >
                                <Link to={'/'} className="font-semibold hover:text-primary flex items-center gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-[22px] h-[22px]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                    <span className="last ">All Categories</span>
                                </Link>
                            </div>
                            <ul className="lg:flex lg:flex-wrap p-1 md:p-2  text-sm" id="menu_nav">
                                <li className="relative mx-1 px-4 py-2 group rounded-full mb-1 md:mb-0" id="button_home">
                                    <NavLink to={'/'} className="text-text hover:text-primary">
                                        <span className="last ">Home</span>
                                    </NavLink>
                                </li>

                                <li className="relative mx-1 px-4 py-2 group  rounded-full mb-1 md:mb-0" id="button_admin">
                                    <a className="text-text hover:text-primary" href="#">
                                        <span className="">About Us</span>
                                    </a>

                                </li>
                                <li className="relative mx-1 px-4 py-2 group  rounded-full mb-1 md:mb-0" id="button_admin">
                                    <NavLink to={"/shop"} className="text-text hover:text-primary" >
                                        <span className="">Shop</span>
                                    </NavLink>

                                </li>
                                <li className="relative mx-1 px-4 py-2 group  rounded-full mb-1 md:mb-0" id="button_moderate">
                                    <a className="text-text hover:text-primary" href="#">
                                        <span className="">Contact Us</span>
                                    </a>
                                    <ul className="absolute w-40 left-0 top-0 mt-10 p-2 rounded-lg shadow-lg bg-white z-10 hidden group-hover:block">
                                        <svg className="block fill-current text-white w-4 h-4 absolute left-0 top-0 ml-3 -mt-3 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path></svg>
                                        <li className="p-1 rounded text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100">
                                            <a className="px-2 py-1" href="#">
                                                <span className="">Email</span>
                                            </a>
                                        </li>
                                        <li className="p-1 rounded text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100">
                                            <a className="px-2 py-1" href="#">
                                                <span className="">Social Media</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                {UserContext.isLogin ? (
                                    <li className="relative mx-1 px-4 py-2 group  rounded-full mb-1 md:mb-0 border" id="button_pm">
                                        <NavLink to={"/profile"} className="text-text hover:text-primary flex gap-2" >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                            </svg>
                                            <span className="">{UserContext.userInfos.username}</span>
                                        </NavLink>
                                    </li>
                                ) : (
                                    <li className="relative mx-1 px-4 py-2 group  rounded-full mb-1 md:mb-0" id="button_pm">
                                        <NavLink to={"/register"} className="text-text hover:text-primary" >
                                            <span className="">Sign Up</span>
                                        </NavLink>
                                    </li>
                                )}


                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </>

    )
}

export default memo(Header) 