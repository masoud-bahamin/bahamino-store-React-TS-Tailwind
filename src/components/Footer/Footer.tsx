import AnimationDiv from "../Animations/AnimationDiv"

function Footer() {
    return (
        <footer>
            <div className='border py-10 md:py-20'>
                <div className='container mx-auto px-4 sm:px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-bold'>
                    <AnimationDiv position="left">
                        <div className=''>
                            <img src="/img/logo.png" alt="" className="mb-6" />
                            <p className='mb-3'>62 North Helen Street Green Cove</p>
                            <p className='mb-3'>Phone: +90 535 484 3540</p>
                            <p className='mb-6'>Email: bahaminwp@gmail.com</p>
                            <div className='flex items-center gap-1 mb-4 lg:mb-0'>
                                <span className=' cursor-pointer hover:scale-110 fill-text hover:fill-primary rounded-full hover:border hover:border-primary p-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" ><path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path></svg>                            </span>
                                <span className=' cursor-pointer hover:scale-110 fill-text hover:fill-primary rounded-full hover:border hover:border-primary p-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" ><path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path></svg>
                                </span>
                                <span className=' cursor-pointer hover:scale-110 fill-text hover:fill-primary rounded-full hover:border hover:border-primary p-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" ><path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path><circle cx="16.806" cy="7.207" r="1.078"></circle><path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path></svg>                            </span>
                                <span className=' cursor-pointer hover:scale-110 fill-text hover:fill-primary rounded-full hover:border hover:border-primary p-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" ><path d="M11.99 2C6.472 2 2 6.473 2 11.99c0 4.232 2.633 7.85 6.35 9.306-.088-.79-.166-2.006.034-2.868.182-.78 1.172-4.966 1.172-4.966s-.299-.599-.299-1.484c0-1.388.805-2.425 1.808-2.425.853 0 1.264.64 1.264 1.407 0 .858-.546 2.139-.827 3.327-.235.994.499 1.805 1.479 1.805 1.775 0 3.141-1.872 3.141-4.575 0-2.392-1.719-4.064-4.173-4.064-2.843 0-4.512 2.132-4.512 4.335 0 .858.331 1.779.744 2.28a.3.3 0 0 1 .069.286c-.076.315-.245.994-.277 1.133-.044.183-.145.222-.335.134-1.247-.581-2.027-2.405-2.027-3.871 0-3.151 2.289-6.045 6.601-6.045 3.466 0 6.159 2.469 6.159 5.77 0 3.444-2.171 6.213-5.184 6.213-1.013 0-1.964-.525-2.29-1.146l-.623 2.374c-.225.868-.834 1.956-1.241 2.62a10 10 0 0 0 2.958.445c5.517 0 9.99-4.473 9.99-9.99S17.507 2 11.99 2"></path></svg>                            </span>
                                <span className=' cursor-pointer hover:scale-110 fill-text hover:fill-primary rounded-full hover:border hover:border-primary p-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" ><path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path></svg>                            </span>
                            </div>
                        </div>
                    </AnimationDiv>
                    <div className=''>
                        <div className='flex gap-5 lg:gap-10 xl:gap-20'>
                            <div>
                                <p className='mb-6 text-sm font-normal text-detail'>CATEGORY</p>
                                <p className='mb-3 cursor-pointer font-medium hover:text-primary hover:border-b border-primary'>About Us</p>
                                <p className='mb-3 cursor-pointer font-medium hover:text-primary hover:border-b border-primary'>Help & Advice</p>
                                <p className='mb-3 cursor-pointer font-medium hover:text-primary hover:border-b border-primary'>Furniture Magazine</p>
                                <p className='mb-3 cursor-pointer font-medium hover:text-primary hover:border-b border-primary'>FR Collections</p>
                                <p className='mb-3 cursor-pointer font-medium hover:text-primary hover:border-b border-primary'>Purchase Protection</p>
                            </div>
                            <div>
                                <p className='mb-6 text-sm font-normal text-detail'>SUPPORT</p>
                                <p className='mb-3 cursor-pointer font-medium hover:text-primary hover:border-b border-primary'>Contact Us</p>
                                <p className='mb-3 cursor-pointer font-medium hover:text-primary hover:border-b border-primary'>Help & Advice</p>
                                <p className='mb-3 cursor-pointer font-medium hover:text-primary hover:border-b border-primary'>Gallery</p>
                                <p className='mb-3 cursor-pointer font-medium hover:text-primary hover:border-b border-primary'>FR Collections</p>
                                <p className='mb-3 cursor-pointer font-medium hover:text-primary hover:border-b border-primary'>Brands</p>
                            </div>
                        </div>
                    </div>
                    <AnimationDiv position="right">
                        <div className=''>
                            <p className='mb-6 text-sm font-normal text-detail'>NEWSLETTER</p>
                            <div className=' flex rounded mb-5'>
                                <input className='md:w-[285px] h-12 pl-2 bg-transparent text-sm lg:text-base border rounded-lg mr-1 sm:mr-2' type="text" placeholder='Your Email' />
                                <button className='py-3 rounded-lg font-medium text-sm lg:text-base px-6 bg-primary text-white'>SUBSCRIBE</button>
                            </div>
                            <p className=' font-medium text-[15px] cursor-pointer'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
                        </div>
                    </AnimationDiv>
                </div>
            </div>
            <div className='container mx-auto px-4 sm:px-2 flex items-center justify-between py-6'>
                <p className="text-sm text-detail">@ 2023 - Blogy - Develop by <a href="https://bahamin.online/" className="text-bold cursor-pointer">Masoud Bahamin</a></p>
               <img src="/img/c2.png" className=" grayscale hidden sm:block" alt="" />
            </div>
        </footer>
    )
}

export default Footer