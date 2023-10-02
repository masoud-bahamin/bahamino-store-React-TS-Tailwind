
import { useEffect, useState ,memo} from 'react';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';
import { myAxios } from '../../Sevises/Axios/confige';

type SearchModalProp = { 
  text: string ;
  activeDialog : boolean
  setActiveDialog : React.Dispatch<React.SetStateAction<boolean>>
}

export const SearchModal = ({ text , setActiveDialog ,activeDialog}: SearchModalProp) => {
 
  const [data , setData] = useState<ProductType[]>([])

  const getData = async () => {
    const response = await myAxios.get(`products/search?q=${text}`)
    setData(response.data.products)
  }

  useEffect(() => {
    getData()
  },[text])


  const dialog = () => {
    setActiveDialog(true);
  };

  const CloseDialog = () => {
    setActiveDialog(false);
  };


  const buttonBorder =
    'rounded-xl py-2 px-4 text-sm duration-300 ease-in-out bg-transparent md:text-sm text-orange-300 ';

  const buttonTransparent =
    'rounded-xl py-2 px-4 shadow-md text-sm duration-300 ease-in-out bg-orange-500 bg-opacity-30 md:text-sm text-gray-700 ';

  return (

    <>
      <div onClick={CloseDialog}
        className={
          activeDialog
            ? 'fixed top-32 left-0 right-0 bottom-0 flex justify-center bg-black bg-opacity-50 z-30 overflow-y-scroll'
            : 'hidden'
        }>
        <div className="relative w-[15rem] md:w-[45rem] p-6 rounded-xl">
          <div
            onClick={CloseDialog}
            className="absolute -top-1 -right-1 hover:top-0 hover:right-0 p-1.5 rounded-lg bg-white shadow-lg cursor-pointer duration-200">
            X
          </div>
          {data.length === 0 ? (<div className='bg-white p-8'><Loader /></div>) : (
            <>
              {
                data.map(product => (
                  <div className='p-4 border-b bg-white' key={product.id}>
                    <div className='flex gap-4 mb-2'>
                    <img
                      className=" w-28 "
                      src={product.thumbnail}
                      alt=""
                    />
                    <div className="space-y-1 text-center text-primary">
                      <h3 className="text-lg font-semibold">
                        {product.title}
                      </h3>
                      <p className="text-sm line-clamp-1">{product.description} </p>
                    </div>
                    </div>
                    <div className="flex items-center justify-center space-x-2 mt-4">
                      <p className={buttonBorder}>${product.price}</p>
                      <Link to={`/product/${product.id}`} className={buttonTransparent}>See page</Link>
                    </div>
                  </div>
                ))
              }

            </>
          )}

        </div>
      </div>

      <div onClick={dialog}
        className="absolute left-4 top-3 text-gray-400 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
    </>
  );


}

export default memo(SearchModal) 