import { MainCard } from "../components/Cards/MainCard"
import Header from "../components/Header/Header"
import { Link } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import { useFetch } from "../Hooks/useFetch"
import AnimationDiv from "../components/Animations/AnimationDiv"
import Swal from "sweetalert2"
import MainSlider from "../components/Sliders/MainSlider"
import IconBoxes from "../components/IconBoxes/IconBoxes"
import Brands from "../components/Brands/Brands"
import { CategoriCard } from "../components/Cards/CategoriCard"
import { useEffect, useState } from "react"
import { firstData, secondData } from "../Data"
import { VeiwCard } from "../components/Cards/VeiwCard"
import CategorySlider from "../components/Sliders/CategorySlider"
import { ProductType } from "../Types"

type FilterType = "all" | "new" | "trend" | "best" | "cost"


function Home() {
    const [page, setPage] = useState<number>(4)
    const [page1, setPage1] = useState<number>(4)
    const [filter, setFilter] = useState<FilterType>("all")
    const [showProuducts, setShowProducts] = useState<ProductType[]>([])

    const { data, error, loading } = useFetch('products')

    if (error) {
        Swal.fire({
            title: error,
            text: "please try again",
            showConfirmButton: true
        }).then(res => {
            if (res) window.location.reload()
        })
    }


    useEffect(() => {
        setShowProducts(data?.products as [])
    }, [loading])

    const filterHandler = (value: FilterType) => {
        switch (value) {
            case "all": setShowProducts(data!.products as [])
                break;
            case "new": setShowProducts(data!.products as [])
                break;
            case "trend": setShowProducts(data!.products?.slice().reverse() as [])
                break;
            case "best":
                setShowProducts(data!.products?.slice().sort((a: ProductType, b: ProductType) => a.price - b.price) as [])

                break;
            case "cost":
                setShowProducts(data!.products?.slice().sort((a: ProductType, b: ProductType) => b.price - a.price) as [])
                break;

            default: throw Error("error 400")
                break;
        }
    }

    return (
        <div>
            <Header />
            <MainSlider />
            <IconBoxes />
            <Brands />
            {/* cards */}
            <div className="container mx-auto px-4 sm:px-2 mb-12">
                <div className="flex justify-between mb-8">
                    <h3 className="semibold text-[32px] ">Featured Products</h3>
                    <div className='flex gap-4 items-center'>
                        <div onClick={() => setPage(prev => prev > 7 ? prev - 4 : 4)}
                            className='bg-page text-bold hover:text-white hover:bg-primary rounded-full p-3 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>
                        </div>
                        <div onClick={() => setPage(prev => prev < firstData.length ? prev + 4 : prev)}
                            className='bg-page text-bold hover:text-white hover:bg-primary rounded-full p-3 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {firstData.map((product, i) => {
                        if (i < page && i > page - 5) return <VeiwCard key={product.id} {...product} />
                    })}
                </div>

            </div>

            <div className="mb-12 mx-auto">
                <div className="container mx-auto px-4 sm:px-2">
                    <h3 className="semibold text-[32px] -mb-[50px]">Top Categories</h3>
                </div>
                <CategorySlider />
            </div>

            <div className="container mx-auto px-4 sm:px-2 mb-12">
                <div className="text-center mb-8">
                    <h3 className="semibold text-[32px] ">Our Products</h3>
                    <ul className='flex flex-wrap sm:flex-nowrap gap-2 items-center text-detail mx-auto w-fit'>
                        <li onClick={() => filterHandler("all")} className="p-2 cursor-pointer text-bold">ALL</li>
                        <li onClick={() => filterHandler("new")} className="p-2 cursor-pointer hover:text-bold">NEWEST</li>
                        <li onClick={() => filterHandler("trend")} className="p-2 cursor-pointer hover:text-bold">TRENDING</li>
                        <li onClick={() => filterHandler("best")} className="p-2 cursor-pointer hover:text-bold">BEST PRICE</li>
                        <li onClick={() => filterHandler("cost")} className="p-2 cursor-pointer hover:text-bold">FEATURED</li>
                    </ul>
                </div>
                {loading ? (
                    <div className=" grid grid-cols-5 gap-6">
                        {Array(5).fill(0).map((item, i) => (
                            <div key={item + i} className="overflow-hidden relative shadow-lg rounded-xl py-8 px-4 max-w-sm w-full mx-auto">
                                <div className="animate-pulse">
                                    <div className="bg-slate-400 my-8  w-48 h-40 rounded mx-auto shadow-lg"></div>
                                    <div className=" py-1 px-10">
                                        <div className="h-2 bg-slate-400 rounded w-[50%] mb-6" />
                                        <div className="h-2 bg-slate-400 rounded" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {showProuducts?.map((product, i) => {
                            if (i < 8) return <MainCard key={product.id}  {...product} />
                        })}
                    </div>
                )}

            </div>
            <div className="bg-page mb-12 py-12">
                <div className="container mx-auto px-4 sm:px-2">
                    <div className=" flex flex-wrap sm:flex-nowrap justify-between mb-8">
                        <h3 className="semibold text-[32px] ">What Client Says About Us</h3>
                        <div className='flex gap-4 items-center'>
                            <div 
                                className='bg-page text-bold hover:text-white hover:bg-primary rounded-full p-3 cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                </svg>
                            </div>
                            <div 
                                className='bg-page text-bold hover:text-white hover:bg-primary rounded-full p-3 cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="hidden lg:flex w-1/2 flex-col justify-between xl:h-[345px] bg-white rounded-xl p-10">
                            <div className="flex  gap-6">
                                <p className="border border-primary"></p>
                                <p className="text-xl text-text">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec
                                    massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere.
                                    Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus.
                                    In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et“
                                </p>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-3">
                                    <img src="/img/u1.png" alt="" />
                                    <div>
                                        <p className="text-xl font-medium">Kristin Watson</p>
                                        <p className="text-detail">Fashion Designer</p>
                                    </div>
                                </div>
                                <img src="/img/q1.png" alt="" />
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-col justify-between lg:h-[345px] bg-white rounded-xl p-10">
                            <div className="flex gap-6">
                                <p className="border border-primary"></p>
                                <p className="text-xl text-text">
                                    Nullam sapien elit, dignissim eu viverra et, scelerisque et felis. Aliquam egestas dui elit,
                                    quis tincidunt lacus aliquam et. Duis nulla velit, dignissim ut odio ac, eleifend luctus leo.
                                    Ut ac imperdiet velit. Aliquam semper ex in volutpat rutrum.
                                </p>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-3 mt-3 sm:mt-0">
                                    <img src="/img/u1.png" alt="" />
                                    <div>
                                        <p className="text-xl font-medium">Kristin Watson</p>
                                        <p className="text-detail">Fashion Designer</p>
                                    </div>
                                </div>
                                <img src="/img/q1.png" alt="" className="hidden sm:block" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 sm:px-2 mb-12">
                <div className="flex justify-between mb-8">
                    <h3 className="semibold text-[32px] ">Recently Added</h3>
                    <div className='flex gap-4 items-center'>
                        <div onClick={() => setPage1(prev => prev > 7 ? prev - 4 : 4)}
                            className='bg-page text-bold hover:text-white hover:bg-primary rounded-full p-3 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>
                        </div>
                        <div onClick={() => setPage1(prev => prev < firstData.length ? prev + 4 : prev)}
                            className='bg-page text-bold hover:text-white hover:bg-primary rounded-full p-3 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </div>
                    </div>
                </div>
                {loading ? (
                    <div className=" grid grid-cols-5 gap-6">
                        {Array(5).fill(0).map((item, i) => (
                            <div key={item + i} className="overflow-hidden relative shadow-lg rounded-xl py-8 px-4 max-w-sm w-full mx-auto">
                                <div className="animate-pulse">
                                    <div className="bg-slate-400 my-8  w-48 h-40 rounded mx-auto shadow-lg"></div>
                                    <div className=" py-1 px-10">
                                        <div className="h-2 bg-slate-400 rounded w-[50%] mb-6" />
                                        <div className="h-2 bg-slate-400 rounded" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {firstData.map((product, i) => {
                            if (i < page1 && i > page1 - 5) return <VeiwCard key={product.id} {...product} />
                        })}
                    </div>
                )}

            </div>
            <Footer />
        </div>
    )
}

export default Home