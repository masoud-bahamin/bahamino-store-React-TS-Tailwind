import { useRoutes } from 'react-router-dom'
import './App.css'
import routes from './routes'
import ProductContextProvider from './Contexts/ProductContext'
import UserContextProvaider from './Contexts/userContext'
import { useEffect } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


function App() {

  const router = useRoutes(routes)

  useEffect(() => {
    window.scrollTo(0,0)
  })

  return (
    <UserContextProvaider>
      <ProductContextProvider>
        <Header />
        <div className='w-screen bg-white overflow-x-hidden'>
          {router}
        </div>
        <Footer />
      </ProductContextProvider>
    </UserContextProvaider>
  )
}

export default App
