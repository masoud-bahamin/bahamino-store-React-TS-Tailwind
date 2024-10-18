import { createContext, useState, useEffect } from "react"
import { myAxios } from "../Sevises/Axios/confige";
import { User } from "../Types";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


type UserInfo = {
    [properti in keyof User]?: User[properti]
}

type UserContext = {
    isLogin: boolean;
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
    userInfos: UserInfo;
    loginUser: (u:string,p:string) => void;
    loading: boolean
}
export const userContext = createContext({} as UserContext)

const getCooki = (name: string): boolean => {
    if (document.cookie) {
        if (document.cookie.split("; " + name + "=")[0]) return true
    }
    return false
}

const UserContextProvaider = ({ children }: { children: React.JSX.Element }) => {

    const [isLogin, setIsLogin] = useState<boolean>(getCooki("token"))
    const [userInfos, setUserInfos] = useState<UserInfo>({})
    const [loading, setLoading] = useState(true)


    const getUserInfo = async () => {
        setLoading(true)
        if (getCooki("token")) {
            let username = 'emilys';
            let password = 'emilyspass';
            const { data } = await myAxios.post("https://dummyjson.com/auth/login", { username, password })
            setUserInfos(data)           
        }
        setLoading(false)
    }

    const navigate = useNavigate()

    const loginUser = async (username: string, password: String) => {
        try {
            const { data } = await myAxios.post("https://dummyjson.com/auth/login", { username, password })
            console.log(data);

            let dateTime = new Date()
            dateTime.setTime(dateTime.getTime() + (24 * 60 * 60 * 1000))

            document.cookie = "token =" + data.accessToken + "; expires=" + dateTime.toUTCString() + "; path=/"

            setIsLogin(true)
            setUserInfos(data)
            navigate("/profile")

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

    useEffect(() => {
        getUserInfo()
    }, [])

    return (
        <userContext.Provider value={{
            isLogin, setIsLogin, userInfos, loginUser , loading
        }}>
            {children}
        </userContext.Provider>
    )
}

export default UserContextProvaider