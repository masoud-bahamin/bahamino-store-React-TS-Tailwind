import { Formik, Field, Form } from "formik"
import { UserSchema } from "../validations/validation"
import { Link } from "react-router-dom"
import { userContext } from "../Contexts/userContext"
import { useContext } from "react"


function Login() {

    type initialValuesType = {
        email: string;
        password: string
    }

    const initialValues: initialValuesType = {
        email: "",
        password: ""
    }

    const {loginUser} = useContext(userContext)

    return (
        <div className="w-full overflow-x-hidden">
            <div className='w-full h-[156px] bg-page rounded-b-[48px] mx-auto overflow-hidden'>
                <div className='py-[50px] container'>
                    <div className="flex gap-2 text-text text-sm mb-2">
                        <span className=" cursor-pointer font-light"> Home{""}  &#10095;</span>
                        <span className=" cursor-pointer font-light"> Account  &#10095;</span>
                        <span className=" cursor-pointer text-bold font-normal"> Sign In</span>
                    </div>
                    <p className="font-semibold text-2xl">Sign In</p>
                </div>
            </div>
            <div className='flex justify-center items-center mt-20'>
                <div className="p-8 bg-white rounded-xl shadow-md">
                    <h3 className="text-center text-[32px] font-semibold text-bold mb-6">Sign In</h3>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(value) => loginUser(value.email, value.password)}
                        validationSchema={UserSchema}
                    >{({ errors, touched }) => (
                        <Form >
                            {errors.email && touched.email ? (<div className="border border-rose-400 text-xs w-fit p-2 mb-2 rounded text-rose-400">{errors.email}</div>) : <></>}
                            <Field name="email" type="text" className="w-72 sm:w-[584px] h-[50px] block p-3 rounded-lg mb-4 bg-page outline-primari" placeholder="Email" />
                            {errors.password && touched.password ? (<div className="border border-rose-400 text-xs w-fit p-2 mb-2 rounded text-rose-400">{errors.password}</div>) : <></>}
                            <Field name="password" type="password" className="w-72 sm:w-[584px] h-[50px] block p-3 rounded-lg mb-4 bg-page outline-primari" placeholder="Password" />
                            <div className="mb-5 flex justify-between">
                                <div className="flex items-center">
                                    <input type="checkbox" name="" id="" className="mr-2 w-5 h-5 rounded" />
                                    <label htmlFor="" className="text-sm text-text">Remember Me</label>
                                </div>
                                <p className="text-primary text-sm cursor-pointer">Forget password?</p>
                            </div>
                            <button type="submit" className="w-full flex gap-3 justify-center font-medium bg-primary text-white p-3 rounded-lg hover:bg-bold mb-4">
                                Sign In
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                                </button>
                            <p className="w-full text-center text-sm font-normal">Don't have account? <span className="text-primary font-medium"><Link to={"/register"} >Sign Up</Link></span></p>
                        </Form>)}
                    </Formik>
                </div>
            </div>
            <div className="container">username: emilys <br />
                password: emilyspass </div>
        </div >
    )
}

export default Login