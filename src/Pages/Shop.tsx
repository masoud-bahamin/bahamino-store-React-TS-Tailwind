import { MainCard } from "../components/Cards/MainCard"
import { Link } from "react-router-dom"
import { useFetch } from "../Hooks/useFetch"
import AnimationDiv from "../components/Animations/AnimationDiv"
import Swal from "sweetalert2"
import IconBoxes from "../components/IconBoxes/IconBoxes"
import Brands from "../components/Brands/Brands"
import { CategoriCard } from "../components/Cards/CategoriCard"
import { useState } from "react"
import { secondData } from "../Data"


function Shop() {
    const [page, setPage] = useState(4)

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

    return (
        <div className="w-full overflow-x-hidden">
           
            {/* First baner */}
            <AnimationDiv position="left">
                <div className="bg-[url(/img/baner.webp)] h-[70vh] py-12 bg-no-repeat bg-center bg-cover text-white">
                    <div className="container mx-auto px-4 sm:px-2">
                        <h2 className="text-3xl md:text-4xl mb-6">Drowing Room</h2>
                        <h3 className="text-6xl md:text-8xl bg-primary p-2 mb-6 w-fit">Inoterior</h3>
                        <div className="flex items-center gap-3 mb-6">
                            <p className="bg-black -rotate-90 p-2">UP TO</p>
                            <p className="text-6xl md:text-8xl">60%</p>
                            <p>Off <br /> Everything</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="px-4 py-2 bg-primary hover:bg-bold rounded">ADD TO CART</button>
                            <button className="px-4 py-2 rounded hover:bg-primary bg-white text-slate-900">SHOP NOW</button>
                        </div>
                    </div>
                </div>
            </AnimationDiv>
            <div className="mt-20">
            <IconBoxes /></div>
            <Brands />
            {/* categori Icon */}
            <div className="container mx-auto px-4 sm:px-2 py-8 xl:px-32">
                <div className="grid grid-cols-4  md:grid-cols-8 lg:grid-cols-8 ">
                    <Link to={`/category/laptops`}>
                        <div className="text-center group mb-6 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.5} stroke="currentColor" className="w-6 h-6 md:w-10 md:h-10 xl:w-16 xl:h-16 mx-auto mb-4 group-hover:text-primary">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                            </svg>
                            <p className="text-xs font-light group-hover:text-primary">Computer</p>
                        </div>
                    </Link>
                    <Link to={`/category/mens-shirts`}>
                        <div className="text-center group mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.5} stroke="currentColor" className="w-6 h-6 md:w-10 md:h-10 xl:w-16 xl:h-16 mx-auto mb-4 group-hover:text-primary">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                            </svg>
                            <p className="text-xs font-light group-hover:text-primary">Clothing</p>
                        </div>
                    </Link>
                    <Link to={`/category/mens-shoes`}>
                        <div className="text-center group mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.5} stroke="currentColor" className="w-6 h-6 md:w-10 md:h-10 xl:w-16 xl:h-16 mx-auto mb-4 group-hover:text-primary">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                            </svg>
                            <p className="text-xs font-light group-hover:text-primary">Shoes</p>
                        </div>
                    </Link>
                    <Link to={`/category/home-decoration`}>
                        <div className="text-center group mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.5} stroke="currentColor" className="w-6 h-6 md:w-10 md:h-10 xl:w-16 xl:h-16 mx-auto mb-4 group-hover:text-primary">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
                            </svg>
                            <p className="text-xs font-light group-hover:text-primary">Accessories</p>
                        </div>
                    </Link>
                    <Link to={`/category/smartphones`}>
                        <div className="text-center group mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.5} stroke="currentColor" className="w-6 h-6 md:w-10 md:h-10 xl:w-16 xl:h-16 mx-auto mb-4 group-hover:text-primary">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                            </svg>
                            <p className="text-xs font-light group-hover:text-primary">Phone</p>
                        </div>
                    </Link>
                    <Link to={`/category/automotive`}>
                        <div className="text-center group mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.5} stroke="currentColor" className="w-6 h-6 md:w-10 md:h-10 xl:w-16 xl:h-16 mx-auto mb-4 group-hover:text-primary">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                            </svg>
                            <p className="text-xs font-light group-hover:text-primary">Car</p>
                        </div>
                    </Link>
                    <Link to={`/category/lighting`}>
                        <div className="text-center group mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.5} stroke="currentColor" className="w-6 h-6 md:w-10 md:h-10 xl:w-16 xl:h-16 mx-auto mb-4 group-hover:text-primary">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0012 6.75zm-1.683 6.443l-.005.005-.006-.005.006-.005.005.005zm-.005 2.127l-.005-.006.005-.005.005.005-.005.005zm-2.116-.006l-.005.006-.006-.006.005-.005.006.005zm-.005-2.116l-.006-.005.006-.005.005.005-.005.005zM9.255 10.5v.008h-.008V10.5h.008zm3.249 1.88l-.007.004-.003-.007.006-.003.004.006zm-1.38 5.126l-.003-.006.006-.004.004.007-.006.003zm.007-6.501l-.003.006-.007-.003.004-.007.006.004zm1.37 5.129l-.007-.004.004-.006.006.003-.004.007zm.504-1.877h-.008v-.007h.008v.007zM9.255 18v.008h-.008V18h.008zm-3.246-1.87l-.007.004L6 16.127l.006-.003.004.006zm1.366-5.119l-.004-.006.006-.004.004.007-.006.003zM7.38 17.5l-.003.006-.007-.003.004-.007.006.004zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007zm-.5 1.873h-.008v-.007h.008v.007zM17.25 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                            </svg>
                            <p className="text-xs font-light group-hover:text-primary">Electronics</p>
                        </div>
                    </Link>
                    <Link to={`/category/sunglasses`}>
                        <div className="text-center group mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.5} stroke="currentColor" className="w-6 h-6 md:w-10 md:h-10 xl:w-16 xl:h-16 mx-auto mb-4 group-hover:text-primary">
                                <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                            </svg>
                            <p className="text-xs font-light group-hover:text-primary">Camera</p>
                        </div>
                    </Link>
                </div>
            </div>
            {/* cards */}
            <div className="container mx-auto px-4 sm:px-2 mb-12">
                <div className="flex justify-between mb-8">
                    <h3 className="semibold text-[32px] ">Featured Products</h3>
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {data?.products?.map((product, i) => {
                            if (i < 4) return <AnimationDiv className="mx-auto" position={i % 2 === 0 ? "left" : "right"} key={product.id}><MainCard {...product} /></AnimationDiv>
                        })}
                    </div>
                )}

            </div>


            <div className="mb-12 mx-auto">
                <div className="flex justify-between mb-8 container mx-auto px-4 sm:px-2">
                    <h3 className="semibold text-[32px] ">Top Categories</h3>
                    <div className='flex gap-4 items-center'>
                        <div className='bg-page text-bold hover:text-white hover:bg-primary rounded-full p-3 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>
                        </div>
                        <div className='bg-page text-bold hover:text-white hover:bg-primary rounded-full p-3 cursor-pointer'>
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
                    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5 ">
                        {secondData.map((product, i) => {
                            if (i < 5) return <AnimationDiv position={i % 2 === 0 ? "left" : "right"} key={product.id}><CategoriCard  {...product} /></AnimationDiv>
                        })}
                    </div>
                )}

            </div>
            <div className="container mx-auto px-4 sm:px-2 mb-12">
                <div className="text-center mb-10">
                    <h3 className="semibold text-[32px] ">All Products</h3>             
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
                        {data?.products?.map((product, i) => {
                            if (i < 8) return <AnimationDiv className="mx-auto" position={i % 2 === 0 ? "left" : "right"} key={product.id}><MainCard   {...product} /></AnimationDiv>
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
                        <div onClick={() => setPage(prev => prev > 7 ? prev - 4 : 4)}
                            className='bg-page text-bold hover:text-white hover:bg-primary rounded-full p-3 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>
                        </div>
                        <div onClick={() => setPage(prev => prev < data!.products!.length ? prev + 4 : prev)}
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
                        {data?.products?.map((product, i) => {
                            if (i < page && i > page - 5) return <MainCard key={product.id} {...product} />
                        })}
                    </div>
                )}

            </div>

            <AnimationDiv position="right">
                <div className="bg-[url(/img/b2.jpg)] h-[70vh] py-12 bg-no-repeat bg-center bg-cover text-white">
                    <div className="container mx-auto px-4 sm:px-2 ">
                        <h2 className="text-3xl md:text-4xl mb-6">Best Products</h2>
                        <h3 className="text-6xl md:text-8xl bg-primary p-2 mb-6 w-fit">Laptops</h3>
                        <div className="flex items-center gap-3 mb-6">
                            <p className="bg-black -rotate-90 p-2">UP TO</p>
                            <p className="text-6xl md:text-8xl">40%</p>
                            <p>Off <br /> Everything</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="px-4 py-2 bg-primary hover:bg-bold rounded">ADD TO CART</button>
                            <button className="px-4 py-2 rounded hover:bg-primary bg-white text-slate-900">SHOP NOW</button>
                        </div>
                    </div>
                </div>
            </AnimationDiv>
        </div>
    )
}

export default Shop