import { Formik, Field, Form } from "formik"
import { UserSchema } from "../validations/validation"
import { Link } from "react-router-dom"

function Register() {
    return (
        <div>
            <div className='w-[1740px] h-[156px] bg-page rounded-b-[48px] mx-auto overflow-hidden'>
                <div className='py-[50px] md:px-[210px] px-8'>
                    <div className="flex gap-2 text-text text-sm mb-2">
                        <span className=" cursor-pointer font-light"> Home{""}  &#10095;</span>
                        <span className=" cursor-pointer font-light"> Account  &#10095;</span>
                        <span className=" cursor-pointer text-bold font-normal"> Sign Up</span>
                    </div>
                    <p className="font-semibold text-2xl">Sign Up</p>
                </div>
            </div>
            <div className='flex justify-center items-center my-20'>
                <div className="p-8 bg-white rounded-xl shadow-md">
                    <h3 className="text-center text-[32px] font-semibold text-bold mb-6">Sign Up</h3>
                    <Formik
                        initialValues={{
                            email: "",
                            password: ""
                        }}
                        onSubmit={(value) => console.log(value)}
                        validationSchema={UserSchema}
                    >
                        {({ errors, touched }) => (
                        <Form> 
                            <input name="uasername" type="text" className="w-72 sm:w-[584px] h-[50px] block p-3 rounded-lg mb-4 bg-page outline-primary" placeholder="Uasername : " />
                            {errors.email && touched.email ? (<div className="border border-rose-400 text-xs w-fit p-2 mb-2 rounded text-rose-400">{errors.email}</div>) : <></>}
                            <Field name="email" type="email" className="w-72 sm:w-[584px] h-[50px] block p-3 rounded-lg mb-4 bg-page outline-primary" placeholder="Email : " />
                            {errors.password && touched.password ? (<div className="border border-rose-400 text-xs w-fit p-2 mb-2 rounded text-rose-400">{errors.password}</div>) : <></>}
                            <Field type="password" name="password" className="w-72 sm:w-[584px] h-[50px] block p-3 rounded-lg mb-4 bg-page outline-primary" placeholder="Password : " />
                            <div className="mb-6 flex justify-between">
                                <div></div>
                                <Link to={"/login"} ><p className="text-primary text-sm cursor-pointer">Have account?</p></Link>
                            </div>
                            <button type="submit" className="w-full flex gap-3 justify-center font-medium bg-primary text-white p-3 rounded-lg hover:bg-bold mb-4">Sign Up</button>     
                        </Form>)}
                    </Formik>
                </div>
            </div>
        </div >
    )
}

export default Register