import { useState, useEffect, memo, useContext } from "react"
import SearchModal from "../Modals/SearchModal"
import Topbar from "./Topbar"
import { NavLink } from "react-router-dom"
import { productContext } from "../../Contexts/ProductContext";
import CartBox from "../Cards/CartBox";
import { userContext } from "../../Contexts/userContext";


function Header() {
    const [activeDialog, setActiveDialog] = useState(false);
    const [searchValue, setSearchValue] = useState<string>("")
    const [totalPrice, setTotalPrice] = useState(0)
    const [isShowMenu , setIsShowMenu] = useState(false)

    const basketContext = useContext(productContext)

    const UserContext = useContext(userContext)

    useEffect(() => {
        setTotalPrice(basketContext.basket.reduce((prev, cur) => { return prev + cur.price }, 0))
    }, [basketContext])

    useEffect(() => {
        if (searchValue.length > 1) {
            setActiveDialog(true)
        }
    }, [searchValue])

    return (
        <>
            <Topbar />
            <header className="container mx-auto px-4 sm:px-2  py-3">
                <div className="flex justify-between xl:gap-20 lg:gap-10 items-center">
                    <NavLink to={'/'}>
                        <img src="/img/logo.png" width={150} alt="" />
                    </NavLink>
                    <button className="lg:hidden" onClick={() => setIsShowMenu(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                    <div className={`${isShowMenu ? "top-0" : "-top-96"} lg:flex lg:gap-28 absolute lg:static z-10 transition-all duration-500 left-0 bg-white lg:bg-transparent items-center w-full`}>
                        <div className="flex p-3 lg:hidden">
                            <button className="ml-auto" onClick={() => setIsShowMenu(false)}>X</button>
                        </div>
                        <div>
                            <div className="relative">
                                <SearchModal text={searchValue} activeDialog={activeDialog} setActiveDialog={setActiveDialog} />
                                <input onChange={e => setSearchValue(e.currentTarget.value)} value={searchValue}
                                    className="w-full rounded hover:shadow-lg focus:shadow-lg focus:outline-0 px-2.5 py-2 border pl-10" type="text" placeholder="Search..." />
                            </div>
                        </div>
                        <nav className="lg:ml-auto">
                            <div className="inline-flex" id="main_menu">
                                <ul className="lg:flex lg:flex-wrap p-1 md:p-2  text-sm md:text-base" id="menu_nav">
                                    <li className="relative mx-1 px-4 py-2 group rounded-full mb-1 md:mb-0" id="button_home">
                                        <NavLink to={'/'} className="font-semibold text-gray-600 hover:text-orange-300">
                                            <span className="last ">Home</span>
                                        </NavLink>
                                    </li>

                                    <li className="relative mx-1 px-4 py-2 group  rounded-full mb-1 md:mb-0" id="button_admin">
                                        <a className="font-semibold text-gray-600 hover:text-orange-300" href="#">
                                            <span className="">About Us</span>
                                        </a>

                                    </li>
                                    <li className="relative mx-1 px-4 py-2 group  rounded-full mb-1 md:mb-0" id="button_moderate">
                                        <a className="font-semibold text-gray-600 hover:text-orange-300" href="#">
                                            <span className="">Contact Us</span>
                                        </a>
                                        <ul className="absolute w-40 left-0 top-0 mt-10 p-2 rounded-lg shadow-lg bg-white z-10 hidden group-hover:block">
                                            <svg className="block fill-current text-white w-4 h-4 absolute left-0 top-0 ml-3 -mt-3 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path></svg>
                                            <li className="p-1 rounded text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100">
                                                <a className="px-2 py-1" href="#">
                                                    <span className="">Email</span>
                                                </a>
                                            </li>
                                            <li className="p-1 rounded text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100">
                                                <a className="px-2 py-1" href="#">
                                                    <span className="">Social Media</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    {UserContext.isLogin ? (
                                        <li className="relative mx-1 px-4 py-2 group  rounded-full mb-1 md:mb-0 border" id="button_pm">
                                            <NavLink to={"/profile"} className="font-semibold text-gray-600 hover:text-orange-300 flex gap-2" >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                                </svg>
                                                <span className="">{UserContext.userInfos.username}</span>
                                            </NavLink>
                                        </li>
                                    ) : (
                                        <li className="relative mx-1 px-4 py-2 group  rounded-full mb-1 md:mb-0" id="button_pm">
                                            <NavLink to={"/register"} className="font-semibold text-gray-600 hover:text-orange-300" >
                                                <span className="">Sign Up</span>
                                            </NavLink>
                                        </li>
                                    )}

                                    <li className="relative mx-1 px-4 py-2 group  rounded-full mb-1 md:mb-0" id="button_pm">
                                        <NavLink to={"/cart"} className="font-semibold text-gray-600 hover:text-orange-300 flex gap-2 relative my-1" >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                            </svg>
                                            <span className=" absolute -top-4 right-10 lg:-right-4 rounded-full px-1 bg-black text-white">{basketContext.basket?.length}</span>
                                            <div className="absolute top-7 left-0 lg:-left-96 bg-white w-96 p-5 rounded text-orange-300 hidden group-hover:block">
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
                                                    className="px-4 py-2 rounded hover:bg-orange-300 bg-white text-slate-900 border border-orange-300 text-xs float-right">Clear Bag</button>
                                            </div>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>

    )
}

export default memo(Header) 