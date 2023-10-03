import { useEffect, useState, useContext } from "react";
import Header from "../components/Header/Header"
import { useParams } from 'react-router-dom';
import Loader from "../components/Loader/Loader";
import { productContext } from "../Contexts/ProductContext";
import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer/Footer";
import { myAxios } from "../Sevises/Axios/confige";

function Product() {
  const [product, setProduct] = useState<ProductType | null>(null)
  const [imageSrc, setImageSrc] = useState<string>("")

  const { productId } = useParams()

  const getProduct = async () => {
    try {
      const response = await myAxios(`/products/${productId}`)
      setProduct(response.data)
      setImageSrc(response.data?.thumbnail)
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => { getProduct() }, [productId])


  const { addToBasket } = useContext(productContext)

  const navigate = useNavigate()


  return (
    <div>
      <Header />
      {product ? (
        <>
          <section className="bg-white py-8">
            <div className="container mx-auto px-4 sm:px-2 flex items-center flex-wrap pt-4 pb-12">
              <nav id="store" className="w-full z-0 top-0 px-6 py-1 mb-6">
                <div className="w-full flex flex-wrap gap-4 items-center  mt-0 py-3">
                  <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 sm:text-xl " href="#">
                    {product.category}
                  </a> / {product.title}
                  <div className="flex items-center ml-auto" id="store-nav-content">
                    <a
                      className="pl-3 inline-block no-underline hover:text-black"
                      href="#"
                    >
                      <svg
                        className="fill-current hover:text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      >
                        <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </nav>
              <div className="w-full  p-6 grid md:grid-cols-2 gap-10">
                <div className="w-full">
                  <div className="w-full mb-5">
                    <img className="hover:grow hover:shadow-lg mx-auto w-[400px] h-[400px]" src={imageSrc || product.thumbnail} />
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    {product.images.map(item => (
                      <img key={item} src={item} onClick={() => setImageSrc(item)}
                        className=" cursor-pointer w-20 h-20" />
                    ))}
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between mb-6">
                    <p className="text-4xl">{product.title}</p>
                    <svg
                      className="h-6 w-6 fill-current text-gray-500 hover:text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                    </svg>
                  </div>
                  <p className="pt-1 text-gray-900 mb-5">${product.price}</p>
                  <div className="flex items-center gap-6 mb-6">
                    <p>seller : <span className=" cursor-pointer hover:text-gray-400 text-gray-600">Arnold Wagner</span></p>
                    <div className="flex">
                      {Array(Math.floor(product.rating)).fill(0).map((item, index) => (
                        <svg key={item + index} xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-orange-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                      ))}
                      {Array(5 - Math.floor(product.rating)).fill(0).map((item, index) => (
                        <svg key={item + index} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-gray-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-5">{product.description}</p>
                  <p className="text-gray-600 text-xs mb-5">4 People looked at this product today</p>
                  <div className="flex gap-2 mb-5">
                    <button onClick={() => {
                      addToBasket(product)
                      navigate('/cart')
                    }}
                      className="px-4 py-2 bg-orange-300 hover:bg-yellow-600 rounded">BUY</button>
                    <button className="px-4 py-2 rounded hover:bg-orange-300 bg-white text-slate-900 border border-orange-300">SEND MESSAGE</button>
                  </div>
                  <div className=" w-full max-w-xs mb-5">
                    <div className="mt-1">
                      <select className="mt-1 block w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-base focus:border-orange-300 focus:outline-none focus:ring-orange-300 sm:text-sm">
                        <option value="1">Shipping Details</option>
                        <option value="2">Free</option>
                      </select>
                    </div>
                  </div>
                  <p className="flex gap-3 items-center text-gray-600 cursor-pointer hover:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                    </svg>
                    Share</p>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-white py-8">
            <div className="container py-8 px-6 mx-auto">
              <a
                className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8"
                href="#"
              >
                About Product
              </a>
              <p className="mt-8 mb-8">
                {product.description}
              </p>
              <p className="mb-8">
                Lorem ipsum dolor sit amet, consectetur <a href="#">random link</a>{" "}
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Vel risus commodo viverra maecenas accumsan lacus vel
                facilisis volutpat. Vitae aliquet nec ullamcorper sit. Nullam eget felis
                eget nunc lobortis mattis aliquam. In est ante in nibh mauris. Egestas
                congue quisque egestas diam in. Facilisi nullam vehicula ipsum a arcu.
                Nec nam aliquam sem et tortor consequat. Eget mi proin sed libero enim
                sed faucibus turpis in. Hac habitasse platea dictumst quisque. In
                aliquam sem fringilla ut. Gravida rutrum quisque non tellus orci ac
                auctor augue mauris. Accumsan lacus vel facilisis volutpat est velit
                egestas dui id. At tempor commodo ullamcorper a. Volutpat commodo sed
                egestas egestas fringilla. Vitae congue eu consequat ac.
              </p>
            </div>
          </section>
        </>
      ) : (
        <div className=" h-screen flex justify-center items-center">
          <Loader />
        </div>
      )}
      <Footer />
    </div>
  )
}

export default Product