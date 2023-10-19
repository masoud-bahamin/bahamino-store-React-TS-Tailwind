import React from 'react'

function MainSlider() {
    return (
        <div className='md:w-[1740px] h-screen pt-20 md:pt-0 md:h-[850px] bg-page rounded-b-[48px] mx-auto overflow-hidden'>
            <div className='relative flex flex-wrap md:justify-around items-center md:h-[850px] px-6 md:px-20'>
                <div className='z-10'>
                    <p className='text-sm text-bold tracking-wide mb-2'>WELCOME TO CHAIRY</p>
                    <h2 className=' font-bold text-4xl md:text-[68px] mb-3 leading-[110%]'>Best Furniture <br />
                        Collection for your <br />
                        interior.</h2>
                    <button className='bg-primary text-white rounded-lg px-6 py-3 font-semibold flex gap-5'>
                        Shop Now
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                </div>
                <div className='relative'>
                    <img src="/img/p1.png" alt="" className='z-10 absolute md:-bottom-[200px] w-80 md:w-[475px]' />
                    <div className='relative -mt-[500px] -ml-[160px] w-[747px] h-[747px] rounded-full bg-[#E1E3E5]'>
                        <div className='absolute right-[100px] bottom-[360px] z-30 bg-white  p-5 rounded-full'>
                            <p className='text-[#F05C52] font-bold text-4xl'>54%</p>
                            <p className='text-sm text-bold'>Discount</p>
                        </div>
                    </div>
                </div>
                <div className='hidden absolute bottom-[100px] h-[340px] w-[1564px] md:flex flex-col'>
                    <div className='flex justify-between'>
                        <div className='bg-white text-primary rounded-full p-3 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>
                        </div>
                        <div className='bg-white text-primary rounded-full p-3 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </div>
                    </div>
                    <div className=' mt-auto w-full text-center text-6xl mb-4'>...</div>
                </div>
            </div>
        </div>
    )
}

export default MainSlider