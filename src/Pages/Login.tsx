import { Formik, Field, Form } from "formik"
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { UserSchema } from "../validations/validation"
import { Link, useNavigate } from "react-router-dom"
import { myAxios } from "../Sevises/Axios/confige"
import Swal from "sweetalert2"
import { userContext } from "../Contexts/userContext"
import {useContext} from "react"


function Login() {

    type initialValuesType = {
        email: string;
        password: string
    }

    const initialValues: initialValuesType = {
        email: "",
        password: ""
    }

    const UserContext = useContext(userContext)

    const navigate = useNavigate()

    const loginUser = async (username: string, password: String) => {
        try {
            const { data } = await myAxios.post("https://dummyjson.com/auth/login", { username, password })
            console.log(data);

            let dateTime = new Date()
            dateTime.setTime(dateTime.getTime() + (7 * 24 * 60 * 60 * 1000) )

            document.cookie = "token =" + data.token + "; expires="+ dateTime.toUTCString() + "; path=/"

            UserContext.setIsLogin(true)
            UserContext.setUserInfos(data)
            navigate("/")

            Swal.fire({
                icon: "success",
                title: `${data.username} Login successfully`,
            })
        } catch (error) {
            console.log(error);

            Swal.fire({
                icon: "error",
                title: `Please try again`,
                text: "Your username and password is incorrect"
            })
        }
    }
    return (
        <div>
            <Header />
            <div className='flex justify-center items-center h-screen'>
                <div className="p-8 bg-white shadow rounded h-[500px]">
                    <h3 className="text-center text-4xl font-semibold text-orange-400 mb-6">Sign In</h3>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(value) => loginUser(value.email, value.password)}
                        validationSchema={UserSchema}
                    >{({ errors, touched }) => (
                        <Form >
                            {errors.email && touched.email ? (<div className="border border-rose-400 text-xs w-fit p-2 mb-2 rounded text-rose-400">{errors.email}</div>) : <></>}
                            <Field name="email" type="text" className="w-72 sm:w-96 block p-3 rounded mb-4 bg-slate-100 outline-orange-400" placeholder="Email Or Username : " />
                            {errors.password && touched.password ? (<div className="border border-rose-400 text-xs w-fit p-2 mb-2 rounded text-rose-400">{errors.password}</div>) : <></>}
                            <Field name="password" type="password" className="w-72 sm:w-96 block p-3 rounded mb-6 bg-slate-100 outline-orange-400" placeholder="Password : " />
                            <div className="mb-6 flex justify-between">
                                <div>
                                    <input type="checkbox" name="" id="" className="mr-2" />
                                    <label htmlFor="" className="text-gray-500">Remember Me</label>
                                </div>
                                <p className="text-orange-400 cursor-pointer">Lost password?</p>
                            </div>
                            <button type="submit" className="w-full bg-orange-400 text-white p-3 rounded hover:bg-orange-700 mb-4">Submit</button>
                            <Link to={"/register"} > <p className="w-full text-center bg-slate-800 text-white p-3 rounded hover:bg-slate-700">Create an account</p></Link>
                        </Form>)}
                    </Formik>
                </div>
            </div>
            <div className="p-8">username: kminchelle <br />
                password: 0lelplR </div>
            <Footer />
        </div >
    )
}

export default Login