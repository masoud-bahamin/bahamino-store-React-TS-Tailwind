import { useRoutes } from 'react-router-dom'
import './App.css'
import routes from './routes'
import ProductContextProvider from './Contexts/ProductContext'
import UserContextProvaider from './Contexts/userContext'


function App() {

  const router = useRoutes(routes)

  return (
    <UserContextProvaider>
      <ProductContextProvider>
        <div className=' bg-orange-50 overflow-x-hidden'>
          {router}
        </div>
      </ProductContextProvider>
    </UserContextProvaider>
  )
}

export default App
