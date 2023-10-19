import Cart from "./Pages/Cart"
import Category from "./Pages/Category"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Product from "./Pages/Product"
import Profile from "./Pages/Profile"
import Register from "./Pages/Register"
import Shop from "./Pages/Shop"

const routes = [
    {path:"/" , element:<Home />},
    {path:"/profile" , element:<Profile />},
    {path:"/product/:productId" , element:<Product />},
    {path:"/category/:categoryId" , element:<Category />},
    {path:"/cart" , element:<Cart />},
    {path:"/login" , element:<Login />},
    {path:"/register" , element:<Register />},
    {path:"/shop" , element:<Shop />},
]

export default routes