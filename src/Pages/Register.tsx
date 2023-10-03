import { Formik, Field, Form } from "formik"
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { UserSchema } from "../validations/validation"
import { Link } from "react-router-dom"

function Register() {
    return (
        <div>
            <Header />
            <div className='flex justify-center items-center h-screen'>
                <div className="p-8 bg-white shadow rounded">
                    <h3 className="text-center text-4xl font-semibold text-orange-400 mb-6">Sign Up</h3>
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
                            <input name="uasername" type="text" className="w-72 sm:w-96 block p-3 rounded mb-4 bg-slate-100 outline-orange-400" placeholder="Uasername : " />
                            {errors.email && touched.email ? (<div className="border border-rose-400 text-xs w-fit p-2 mb-2 rounded text-rose-400">{errors.email}</div>) : <></>}
                            <Field name="email" type="email" className="w-72 sm:w-96 block p-3 rounded mb-4 bg-slate-100 outline-orange-400" placeholder="Email : " />
                            {errors.password && touched.password ? (<div className="border border-rose-400 text-xs w-fit p-2 mb-2 rounded text-rose-400">{errors.password}</div>) : <></>}
                            <Field type="password" name="password" className="w-72 sm:w-96 block p-3 rounded mb-6 bg-slate-100 outline-orange-400" placeholder="Password : " />
                            <div className="mb-6 flex justify-between">
                                <div></div>
                                <Link to={"/login"} ><p className="text-orange-400 cursor-pointer">Have account?</p></Link>
                            </div>
                            <button type="submit" className="w-full bg-orange-400 text-white p-3 rounded hover:bg-orange-700 mb-4">Submit</button>     
                        </Form>)}
                    </Formik>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Register