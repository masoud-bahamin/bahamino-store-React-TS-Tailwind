
import { useParams } from 'react-router-dom';
import Loader from "../components/Loader/Loader";
import { MainCard } from "../components/Cards/MainCard";
import { useFetch } from "../Hooks/useFetch";

function Category() {

    const { categoryId } = useParams()

    const { data, error, loading } = useFetch(`products/category/${categoryId}`)

    return (
        <div>
            {/* First baner */}
            <div className="bg-[url(./img/baner.webp)] h-[70vh] py-12 bg-no-repeat bg-center bg-cover text-white">
                <div className="container mx-auto px-4 sm:px-2">
                    <h2 className="text-4xl mb-6">Drowing Room</h2>
                    <h3 className="text-8xl bg-primary p-2 mb-6 w-fit">Inoterior</h3>
                    <div className="flex items-center gap-3 mb-6">
                        <p className="bg-black -rotate-90 p-2">UP TO</p>
                        <p className="text-8xl">60%</p>
                        <p>Off <br /> Everything</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 bg-primary hover:bg-bold rounded">ADD TO CART</button>
                        <button className="px-4 py-2 rounded hover:bg-primary bg-white text-slate-900">SHOP NOW</button>
                    </div>
                </div>
            </div>
            {/* cards */}
            <div className="container mx-auto px-4 sm:px-2 py-8">
                <h2 className="my-8 text-4xl">Category / {categoryId}</h2>
                {loading && error ? (
                    <div className="bg-slate-300 h-screen flex justify-center items-center">
                        <Loader />
                    </div>
                ) : (
                    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {data?.products!.map(product => (
                            <MainCard key={product.id}  {...product} />
                        ))}
                    </div>
                )}

            </div>
        </div>
    )
}

export default Category