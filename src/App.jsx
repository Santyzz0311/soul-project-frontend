import { Route, Routes, useLocation } from 'react-router'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Login from './pages/Login'
import Footer from './Components/Footer'
import Products from './pages/Products'

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
      </Routes>
      {isLoginPage ? null : <Footer />}
    </>
  )
}

export default App
