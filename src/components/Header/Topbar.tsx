

function Topbar() {
  return (
    <div className=" bg-bold w-full hidden sm:block">
      <div className="container mx-auto px-4 sm:px-2 h-11 text-white text-xs font-extralight flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4 mr-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
        <p >Free shipping on all orders over $50</p>
        <select name="lan" id="" className=" bg-transparent text-white ml-auto mr-4">
          <option value="Eng" className=" text-text">Eng</option>
          <option value="Eng" className=" text-text">Ger</option>
        </select>
        <a href="#" className="mr-4">Faqs</a>
        <a href="#" className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4 mr-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
        <p>Need Help</p>
        </a>
      </div>
    </div>
  )
}

export default Topbar