import { MainCard } from "../components/Cards/MainCard"
import AddProductCart from "../components/Cards/addProductCart"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import FormWizard from "../components/Wizard/Wizard"
import { useState } from "react"

function Profile() {

    const [isShowWizard, setIsShowWizard] = useState<boolean>(false)
    return (
        <div className="">
            <Header />
            <div
                className="content-wrapper transition-all duration-150" id="content_wrapper">
                <div className="page-content">
                    <div className="transition-all duration-150 container-fluid" id="page_layout">
                        <div id="content_layout">
                            <div className="space-y-5 profile-page">
                                <div className="profiel-wrap px-[35px] pb-10 md:pt-[84px] pt-10 rounded-lg bg-white  lg:flex lg:space-y-0 space-y-6 justify-between items-end relative z-[1]">
                                    <div className=" container mx-auto px-4 sm:px-2">
                                        <div className=" absolute left-0 top-0 md:h-1/2 h-[150px] w-full z-[-1] rounded-t-lg"></div>
                                        <div className="profile-box flex-none md:text-start text-center">
                                            <div className="md:flex items-end md:space-x-6 rtl:space-x-reverse">
                                                <div className="flex-none">
                                                    <div
                                                        className="md:h-[186px] md:w-[186px] h-[140px] w-[140px] md:ml-0 md:mr-0 ml-auto mr-auto md:mb-0 mb-4 rounded-full ring-4  ring-slate-100 relative"
                                                    >
                                                        <img
                                                            src="img/avatar.avif"
                                                            alt=""
                                                            className="w-full h-full object-cover rounded-full"
                                                        />
                                                        <a
                                                            href="profile-setting"
                                                            className="absolute right-2 h-8 w-8 bg-slate-50 text-slate-600 rounded-full shadow-sm flex flex-col items-center justify-center md:top-[140px] top-[100px]"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>

                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="text-2xl font-medium text-slate-900  mb-[3px]">
                                                        Masoud Bahamin
                                                    </div>
                                                    <div className="text-sm font-light text-slate-600 ">
                                                        Front End Developer
                                                    </div>
                                                </div>
                                                <button onClick={() => setIsShowWizard(true)}
                                                    className="ml-auto bg-primary text-white rounded py-2 px-4 hover:scale-105 hover:bg-bold my-4">Add Your Product</button>
                                            </div>
                                        </div>
                                        {/* end profile box */}
                                        <div className="profile-info-500 md:flex md:text-start text-center flex-1 max-w-[516px] md:space-y-0 space-y-4">
                                            <div className="flex-1">
                                                <div className="text-base text-slate-900  font-medium mb-1">
                                                    $32,400
                                                </div>
                                                <div className="text-sm text-slate-600 font-light ">
                                                    Total Balance
                                                </div>
                                            </div>
                                            {/* end single */}
                                            <div className="flex-1">
                                                <div className="text-base text-slate-900  font-medium mb-1">
                                                    200
                                                </div>
                                                <div className="text-sm text-slate-600 font-light ">
                                                    Board Card
                                                </div>
                                            </div>
                                            {/* end single */}
                                            <div className="flex-1">
                                                <div className="text-base text-slate-900  font-medium mb-1">
                                                    3200
                                                </div>
                                                <div className="text-sm text-slate-600 font-light ">
                                                    Calender Events
                                                </div>
                                            </div>
                                            {/* end single */}

                                        </div>
                                        {/* profile info-500 */}
                                    </div>
                                </div>
                                {isShowWizard ? (<FormWizard />) : (<></>)}
                                <div className="grid grid-cols-12 gap-6  container mx-auto px-4 sm:px-2">
                                    <div className="lg:col-span-4 col-span-12">
                                        <div className="card h-full">
                                            <header className="card-header">
                                                <h4 className="card-title">Info</h4>
                                            </header>
                                            <div className="card-body p-6">
                                                <ul className="list space-y-8">
                                                    <li className="flex space-x-3 rtl:space-x-reverse">
                                                        <div className="flex-none text-2xl text-slate-600 ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                                            </svg>
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="uppercase text-xs text-slate-500 leading-[12px]">
                                                                EMAIL
                                                            </div>
                                                            <a
                                                                href="mailto:someone@example.com"
                                                                className="text-base text-slate-600 "
                                                            >
                                                                info@bahamin.online
                                                            </a>
                                                        </div>
                                                    </li>
                                                    {/* end single list */}
                                                    <li className="flex space-x-3 rtl:space-x-reverse">
                                                        <div className="flex-none text-2xl text-slate-600 ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                                            </svg>


                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="uppercase text-xs text-slate-500 leading-[12px]">
                                                                PHONE
                                                            </div>
                                                            <a
                                                                href="tel:0189749676767"
                                                                className="text-base text-slate-600 "
                                                            >
                                                                +90-535-484-3540
                                                            </a>
                                                        </div>
                                                    </li>
                                                    {/* end single list */}
                                                    <li className="flex space-x-3 rtl:space-x-reverse">
                                                        <div className="flex-none text-2xl text-slate-600 ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                            </svg>


                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="uppercase text-xs text-slate-500 leading-[12px]">
                                                                LOCATION
                                                            </div>
                                                            <div className="text-base text-slate-600 ">
                                                                Home# 320/N, Road# 71/B, Mohakhali, Dhaka-1207,
                                                                Turkey
                                                            </div>
                                                        </div>
                                                    </li>
                                                    {/* end single list */}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-8 col-span-12">
                                        <div className="card ">
                                            <header className="card-header">
                                                <h4 className="card-title">Your Orders</h4>
                                            </header>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3">
                                                <MainCard discountPercentage={10} category="mens-shoes" stock={50} brand="" images={[""]} title="Shoes" price={250}
                                                    thumbnail="/src/assets/img/p1.png"
                                                    rating={4.6} description="En Trend Ayakkabı, Çanta, Bijuteri ve Aksesuar Alışveriş Sitesi
                                                Images may be subject to copyright. Learn More"  id={125} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-8 col-span-12">
                                    <h4 className="card-title">Your Products</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                                        <AddProductCart brand="Melli" title="Shoes first" price={100}
                                            description="Çanta, Bijuteri ve Aksesuar Alışveriş Sitesi
                                                Images may be subject to copyright. Learn More"  phone="" imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPvVWssHt4W1hzTvQi7EBiOt-HBvQrbpVtLA&usqp=CAU" />
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Profile