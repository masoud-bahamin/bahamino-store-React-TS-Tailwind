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
                                    <div className=" container mx-auto">
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
                                                    className="ml-auto bg-orange-400 text-white rounded py-2 px-4 hover:scale-105 hover:bg:orange-300">Add Your Product</button>
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
                                <div className="grid grid-cols-12 gap-6  container mx-auto">
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
                                            <div className="grid grid-cols-4">
                                                <MainCard discountPercentage={10} category="mens-shoes" stock={50} brand="" images={[""]} title="Shoes" price={250}
                                                    thumbnail="data:image/jpeg;base64,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"
                                                    rating={4.6} description="En Trend Ayakkabı, Çanta, Bijuteri ve Aksesuar Alışveriş Sitesi
                                                Images may be subject to copyright. Learn More"  id={125} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-8 col-span-12">
                                    <h4 className="card-title">Your Products</h4>
                                    <div className="grid grid-cols-4">
                                        <AddProductCart brand="" title="Shoes first" price={100}
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