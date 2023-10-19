import { useRoutes } from 'react-router-dom'
import './App.css'
import routes from './routes'
import ProductContextProvider from './Contexts/ProductContext'
import UserContextProvaider from './Contexts/userContext'
import { useEffect } from 'react'


function App() {

  const router = useRoutes(routes)

  useEffect(() => {
    window.scrollTo(0,0)
  })

  return (
    <UserContextProvaider>
      <ProductContextProvider>
        <div className=' bg-white overflow-x-hidden'>
          {router}
        </div>
      </ProductContextProvider>
    </UserContextProvaider>
  )
}

export default App
