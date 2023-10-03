import { Formik, Field, Form } from "formik";
import { useState } from "react";
import { productSchema } from "../../validations/validation";
import { myAxios } from "../../Sevises/Axios/confige";
import Swal from "sweetalert2";
import AddProductCart from "../Cards/addProductCart";

const steps = [
    {
        id: 1,
        title: "Product Details",
    },
    {
        id: 2,
        title: "Category",
    },
    {
        id: 3,
        title: "Personal info",
    },
    {
        id: 4,
        title: "Upload",
    },
];

const FormWizard = () => {
    const [stepNumber, setStepNumber] = useState(0);
    const [image, setImage] = useState<object>({})
    const [imageSrc, setImageSrc] = useState("")
    const [product, setProduct] = useState<initialValuesTypes>({
        title: "",
        price: "",
        description: "",
        brand: "",
        phone: ""
    })

    const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        // next step until last step . if last step then submit form
        let totalSteps = steps.length;
        const isLastStep = stepNumber === totalSteps - 2;
        if (isLastStep) {
            console.log("data");
            setStepNumber(stepNumber + 1);
        } else {
            setStepNumber(stepNumber + 1);
        }
    };

    const handlePrev = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        setStepNumber(stepNumber - 1);
    };

    const changeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImage(e.target.files[0])

            const reader = new FileReader();

            reader.onload = (event) => {
                if (typeof event?.target?.result === "string") {
                    setImageSrc(event.target.result);
                }

            };

            reader.readAsDataURL(e.target.files[0]);
        }
        else {
            setImageSrc("");
        }
    }

    const submitForm = (product: initialValuesTypes) => {
        setProduct(product)
        setStepNumber(prev => prev + 1)
    }

    const addProduct = async () => {

        try {
            const { data } = await myAxios.post("products/add", { title: product.title })
            console.log(data);

            Swal.fire({
                icon: "success",
                title: `${data.title} product added successfully`,
            })
        } catch (error) {
            console.log(error);

            Swal.fire({
                icon: "error",
                title: `Please try again`,
            })
        }

    }

    return (
        <div className="container mx-auto px-4 sm:px-2 py-10">
            <div>
                <div className="grid gap-5 grid-cols-12 relative">
                    <div className="lg:col-span-3 col-span-12">
                        <div className="flex z-[5] items-start relative flex-col lg:min-h-full md:min-h-[300px] min-h-[250px]">
                            {steps.map((item, i) => (
                                <div className="relative z-[1] flex-1 last:flex-none" key={i}>
                                    <div
                                        className={`   ${stepNumber >= i
                                            ? "bg-slate-900 text-white ring-slate-900 ring-offset-2"
                                            : "bg-white ring-slate-900 ring-opacity-70  text-slate-900  text-opacity-70  "
                                            } 
                                               transition duration-150 icon-box md:h-12 md:w-12 h-8 w-8 rounded-full flex flex-col items-center justify-center relative z-[66] ring-1 md:text-lg text-base font-medium
                                               `}
                                    >
                                        {stepNumber <= i ? (
                                            <span> {i + 1}</span>
                                        ) : (
                                            <span className="text-3xl">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>

                                            </span>
                                        )}
                                    </div>
                                    <div
                                        className={` ${stepNumber >= i
                                            ? "bg-slate-900 "
                                            : "bg-[#E0EAFF] "
                                            } absolute top-0 left-1/2 -translate-x-1/2 h-full w-[2px]`}
                                    ></div>
                                    <div
                                        className={` ${stepNumber >= i
                                            ? " text-slate-900 "
                                            : "text-slate-500  "
                                            } absolute top-0 left-full pl-4  text-base leading-6 md:mt-3 mt-1 transition duration-150 w-full`}
                                    >
                                        <span className="w-max block">{item.title}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="conten-box lg:col-span-9 col-span-12 ">
                        <Formik
                            onSubmit={(value) => {
                                submitForm(value)
                            }}
                            initialValues={product}
                            validationSchema={productSchema}
                        >
                            {({ errors, touched }) => (
                                <Form >
                                    <div className="flex gap-3 flex-wrap">
                                        {errors.title && touched.title ? (<div className="border border-rose-400 text-xs w-fit p-2 rounded text-rose-400">{errors.title}</div>) : <></>}
                                        {errors.price && touched.price ? (<div className="border border-rose-400 text-xs w-fit p-2 rounded text-rose-400">{errors.price}</div>) : <></>}
                                        {errors.description && touched.description ? (<div className="border border-rose-400 text-xs w-fit p-2 rounded text-rose-400">{errors.description}</div>) : <></>}
                                        {errors.brand && touched.brand ? (<div className="border border-rose-400 text-xs w-fit p-2 rounded text-rose-400">{errors.brand}</div>) : <></>}
                                        {errors.phone && touched.phone ? (<div className="border border-rose-400 text-xs w-fit p-2 rounded text-rose-400">{errors.phone}</div>) : <></>}
                                    </div>
                                    {stepNumber === 0 && (
                                        <div className=" h-72">
                                            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                                                <div className="lg:col-span-3 md:col-span-2 col-span-1">
                                                    <h4 className="text-base text-slate-800  mb-6">
                                                        Enter Your Product Details
                                                    </h4>

                                                </div>
                                                <Field
                                                    className="p-2 px-3 rounded"
                                                    type="text"
                                                    placeholder="Product Title*"
                                                    name="title"
                                                />
                                                <input
                                                    className="p-2 px-3 rounded"
                                                    type="text"
                                                    placeholder="Color"
                                                    name="fullname"

                                                />
                                                <Field
                                                    className="p-2 px-3 rounded"
                                                    type="text"
                                                    placeholder="Description"
                                                    name="description"
                                                />
                                                <Field
                                                    className="p-2 px-3 rounded"
                                                    type="number"
                                                    placeholder="price*"
                                                    name="price"
                                                />
                                                <label htmlFor="fileInput" className="bg-white px-4 py-2 text-orange-400 w-fit flex gap-2 hover:bg-orange-300 hover:text-white cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                                                    </svg>

                                                    <p>Add Product Image</p>
                                                </label>
                                                <input
                                                    onChange={changeImage}
                                                    className="hidden"
                                                    type="file"
                                                    placeholder="State"
                                                    id="fileInput"
                                                    accept="image"
                                                />
                                            </div>
                                            {image ? (
                                                <img src={imageSrc} alt="" width={50} className="my-3" />
                                            ) : (<></>)}
                                        </div>
                                    )}

                                    {stepNumber === 1 && (
                                        <div className=" h-72">
                                            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                                                <div className="md:col-span-2 col-span-1">
                                                    <h4 className="text-base text-slate-800  mb-6">
                                                        Enter Category info
                                                    </h4>
                                                </div>
                                                <div className="w-full max-w-xs">
                                                    <div className="mt-1">
                                                        <select className="mt-1 block w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-base focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm">
                                                            <option value="1">Category</option>
                                                            <option value="2">Phones</option>
                                                            <option value="3">Laptops</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <Field
                                                    className="p-2 px-3 rounded"
                                                    type="text"
                                                    placeholder="Brand"
                                                    name="brand"

                                                />
                                            </div>
                                        </div>
                                    )}
                                    {stepNumber === 2 && (
                                        <div className=" h-72">
                                            <div className="grid grid-cols-1 gap-5">
                                                <div className="">
                                                    <h4 className="text-base text-slate-800  mb-6">
                                                        Enter Your Address
                                                    </h4>
                                                </div>
                                                <Field
                                                    className="p-2 px-3 rounded"
                                                    type="text"
                                                    placeholder="Phone Number"
                                                    name="phone"
                                                />
                                                <textarea
                                                    className="p-2 px-3 rounded"
                                                    placeholder="Write Address"
                                                    name="address"
                                                />
                                            </div>
                                        </div>
                                    )}
                                    {stepNumber === 3 && (
                                        <div className=" h-72">
                                            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                                                <AddProductCart  {...product} imageSrc={imageSrc} />
                                            </div>
                                        </div>
                                    )}
                                    <div
                                        className={`${stepNumber > 0 ? "flex justify-between" : " text-right"
                                            } mt-10`}
                                    >
                                        {stepNumber !== 0 && stepNumber !== 4 && (
                                            <button className="bg-white text-orange-400 border border-orange-400 py-2 px-4 rounded hover:scale-105" onClick={handlePrev}>prev</button>
                                        )}
                                        {stepNumber < 2 ? (
                                            <button className="px-4 py-2 bg-orange-300 text-white rounded hover:scale-105"
                                                onClick={onSubmit} >next</button>
                                        ) : stepNumber === 2 ? (
                                            <button className="px-4 py-2 bg-orange-300 text-white rounded hover:scale-105"
                                                type="submit" >next</button>
                                        ) : stepNumber === 3 ? (
                                            <button className="px-4 py-2 bg-orange-300 text-white rounded hover:scale-105"
                                                onClick={addProduct} >Submit</button>
                                        ) : (
                                            <>FINISH YOUR WIZARD</>
                                        )
                                        } 
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default FormWizard;
