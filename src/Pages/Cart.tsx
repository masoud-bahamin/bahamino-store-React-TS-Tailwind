import { useContext, useState, useEffect } from "react"
import CartBox from "../components/Cards/CartBox"
import Header from "../components/Header/Header"
import { productContext } from "../Contexts/ProductContext"
import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer/Footer"


function Cart() {

    const [totalPrice, setTotalPrice] = useState(0)

    const basketContext = useContext(productContext)

    const navigate = useNavigate()

    useEffect(() => {
        setTotalPrice(basketContext.basket.reduce((prev, cur) => { return prev + cur.price }, 0))
    }, [basketContext])

    return (
        <div>
            <Header />
            <div className="container mx-auto px-4 sm:px-2 flex flex-wrap md:flex-nowrap gap-6 min-h-screen my-12">
                <div className="w-full md:w-1/2 p-6 border rounded">
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
                <div className="w-full md:w-1/2 p-6 border rounded flex justify-center pt-12">
                    <div>
                        <p className="px-3 py-2 md:py-3 md:px-4 block w-full md:w-[18rem]
                        xl:w-[22rem] rounded-lg md:rounded-xl text-sm placeholder:text-gray-600
                        placeholder:font-normal border-2 ring-2 ring-transparent mb-4
                        border-gray-200 hover:border-blue-200 outline-none focus:ring-blue-300 
                       duration-300">
                            Total : ${totalPrice}
                        </p>
                        <input type="text" className="px-3 py-2 md:py-3 md:px-4 block w-full md:w-[18rem]
                        xl:w-[22rem] rounded-lg md:rounded-xl text-sm placeholder:text-gray-600
                        placeholder:font-normal border-2 ring-2 ring-transparent mb-4
                        border-gray-200 hover:border-blue-200 outline-none focus:ring-blue-300 
                       duration-300" placeholder="Name:" />
                        <input type="text" className="px-3 py-2 md:py-3 md:px-4 block w-full md:w-[18rem]
                        xl:w-[22rem] rounded-lg md:rounded-xl text-sm placeholder:text-gray-600
                        placeholder:font-normal border-2 ring-2 ring-transparent mb-4
                        border-gray-200 hover:border-blue-200 outline-none focus:ring-blue-300 
                       duration-300" placeholder="Lastname:" />
                        <input type="text" className="px-3 py-2 md:py-3 md:px-4 block w-full md:w-[18rem]
                        xl:w-[22rem] rounded-lg md:rounded-xl text-sm placeholder:text-gray-600
                        placeholder:font-normal border-2 ring-2 ring-transparent mb-4
                        border-gray-200 hover:border-blue-200 outline-none focus:ring-blue-300 
                       duration-300" placeholder="Card Number:" />
                        <input type="text" className="px-3 py-2 md:py-3 md:px-4 block w-full md:w-[18rem]
                        xl:w-[22rem] rounded-lg md:rounded-xl text-sm placeholder:text-gray-600
                        placeholder:font-normal border-2 ring-2 ring-transparent mb-4
                        border-gray-200 hover:border-blue-200 outline-none focus:ring-blue-300 
                       duration-300" placeholder="Password:" />
                        <input onClick={() => {
                            basketContext.removeAllProduct()
                            navigate("/")
                        }}
                            type="button" className="px-3 py-2 md:py-3 md:px-4 block w-full md:w-[18rem]
                        xl:w-[22rem] rounded-lg md:rounded-xl text-sm placeholder:text-gray-600
                        placeholder:font-normal border-2 ring-2 ring-transparent mb-4 bg-primary
                        border-gray-200 hover:border-blue-200 outline-none focus:ring-blue-300 
                       duration-300 text-white" placeholder="Password:" value="Send" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart