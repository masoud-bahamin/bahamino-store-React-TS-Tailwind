

function IconBoxes() {
  return (
    <div className='container mx-auto px-8 lg:px-[70px] py-[50px] bg-white rounded-xl text-bold shadow-md -mt-[80px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-10'>
      <div className='flex items-center  gap-4'>
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
        </svg> */}
        <div>
          <img src="/img/b1.png" alt="" />
        </div>
        <div>
          <p className='font-semibold text-lg'>Discount</p>
          <p className='text-[15px] text-detail'>Every week new sales</p>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <div>
          <img src="/img/b2.png" alt="" />
        </div>

        <div>
          <p className='font-semibold text-lg'>Free Delivery</p>
          <p className='text-[15px] text-detail'>100% Free for all orders</p>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <div>
          <img src="/img/b3.png" alt="" />
        </div>

        <div>
          <p className='font-semibold text-lg'>Great Support 24/7</p>
          <p className='text-[15px] text-detail'>We care your experiences</p>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <div>
          <img src="/img/b4.png" alt="" />
        </div>

        <div>
          <p className='font-semibold text-lg'>Secure Payment</p>
          <p className='text-[15px] text-detail'>100% Secure Payment Method</p>
        </div>
      </div>
    </div>
  )
}

export default IconBoxes