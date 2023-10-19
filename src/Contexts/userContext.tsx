import { createContext, useState, useEffect } from "react"
import { boolean } from "yup";
import { myAxios } from "../Sevises/Axios/confige";
import { User } from "../Types";


const serverToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZyIsImlhdCI6MTY5NjI1NTYzNywiZXhwIjoxNjk2MjU5MjM3fQ.wPN4kCGWEemrOelRXrzs-By2v71mK8WplLDJcyuniIc"
type UserInfo = {
    [properti in keyof User]?: User[properti]
}

type UserContext = {
    isLogin: boolean;
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
    userInfos: UserInfo;
    setUserInfos: React.Dispatch<React.SetStateAction<UserInfo>>;
}
export const userContext = createContext({} as UserContext)

const getCooki = (name: string): boolean => {
    if (document.cookie) {
        if (document.cookie.split("; " + name + "=")[1] === serverToken) return true
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
            let username = "kminchelle";
            let password = "0lelplR";
            const { data } = await myAxios.post("https://dummyjson.com/auth/login", { username, password })
            setUserInfos(data)
        }
        setLoading(false)
    }

    useEffect(() => {
        getUserInfo()
    }, [])

    return (
        <userContext.Provider value={{
            isLogin, setIsLogin, userInfos, setUserInfos
        }}>
            {children}
        </userContext.Provider>
    )
}

export default UserContextProvaider