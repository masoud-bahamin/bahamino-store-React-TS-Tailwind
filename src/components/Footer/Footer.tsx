import AnimationDiv from "../Animations/AnimationDiv"

function Footer() {
    return (
        <footer className='bg-gray-900 text-gray-200'>
            <div className='container mx-auto px-4 sm:px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <AnimationDiv position="left">
                    <div className='lg:border-r p-10'>
                        <div className='flex items-center gap-4 mb-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" style={{ fill: "rgba(250,250,250, 1)" }}><path d="M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59 7.62 7.62 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43 15.28 15.28 0 0 0 6.3 17.7 15.28 15.28 0 0 0 16.57 22zM6 5.41 8.59 8 7.3 9.29a1 1 0 0 0-.3.91 10.12 10.12 0 0 0 2.3 4.5 10.08 10.08 0 0 0 4.5 2.3 1 1 0 0 0 .91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7z"></path><path d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z"></path></svg>
                            <div>
                                <p>Our Sales Team</p>
                                <p>(+90) 535 484 3540</p>
                            </div>
                        </div>
                        <p className='mb-3'>62 North Helen Street Green Cove, FL 3204</p>
                        <p className='mb-3'>Phone: +90 535 484 3540</p>
                        <p className='mb-3'>Email: bahaminwp@gmail.com</p>
                        <div className='flex items-center gap-4'>
                            <span>Follow Us : </span>
                            <span className=' cursor-pointer hover:scale-110'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(250,250,250, 1)" }}><path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path></svg>
                            </span>
                            <span className=' cursor-pointer hover:scale-110'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(250,250,250, 1)" }}><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></path></svg>
                            </span>
                            <span className=' cursor-pointer hover:scale-110'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(250,250,250, 1)" }}><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path></svg>
                            </span>
                            <span className=' cursor-pointer hover:scale-110'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(250,250,250, 1)" }}><path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path><circle cx="11.994" cy="11.979" r="3.003"></circle></svg>
                            </span>
                        </div>
                    </div>
                </AnimationDiv>
                <div className='lg:border-r p-10'>
                    <p className='text-2xl mb-5'>Information</p>
                    <div className='flex gap-6'>
                        <div>
                            <p className='mb-3 cursor-pointer'>About Us</p>
                            <p className='mb-3 cursor-pointer'>Help & Advice</p>
                            <p className='mb-3 cursor-pointer'>Furniture Magazine</p>
                            <p className='mb-3 cursor-pointer'>FR Collections</p>
                            <p className='mb-3 cursor-pointer'>Purchase Protection</p>
                        </div>
                        <div>
                            <p className='mb-3 cursor-pointer'>Contact Us</p>
                            <p className='mb-3 cursor-pointer'>Help & Advice</p>
                            <p className='mb-3 cursor-pointer'>Gallery</p>
                            <p className='mb-3 cursor-pointer'>FR Collections</p>
                            <p className='mb-3 cursor-pointer'>Brands</p>
                        </div>
                    </div>
                </div>
                <AnimationDiv position="right">
                    <div className=' p-10'>
                        <p className='text-2xl mb-5'>Off your first order when you sign-up to
                            our newsletter</p>
                        <div className='border flex justify-between w-fit rounded border-slate-700 mb-5'>
                            <input className='px-4 bg-transparent' type="text" placeholder='Your Email Address' />
                            <button className='py-2 px-4 bg-orange-400 text-white'>SUBSCRIBE</button>
                        </div>
                        <p className='mb-3 cursor-pointer'>Payment methods</p>
                        <div className='flex gap-2'>
                            <img src="/img/m.png" alt="mastercard" title='mastercard' />
                            <img src="/img/v.png" alt="visa card" title="visa card" />
                        </div>
                    </div>
                </AnimationDiv>
            </div>
        </footer>
    )
}

export default Footer