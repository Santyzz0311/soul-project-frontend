import { Route, Routes, useLocation } from 'react-router'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './pages/Home'
import Login from './pages/Login'
import Footer from './Components/Footer'
import Products from './pages/Products'
import Cart from './pages/CartPage'

function App() {

  const location = useLocation()

  const isLoginPage = location.pathname === '/login'

  return (
    <>
      {isLoginPage ? null : <NavBar />}
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/login' Component={Login} />
        <Route path='/products' Component={Products} />
        <Route path='/cart' Component={Cart} />
      </Routes>
      {isLoginPage ? null : <Footer />}
    </>
  )
}

export default App
