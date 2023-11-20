import { Route, Routes } from 'react-router'
import './App.css'
import NavBar from './Components/NavBar'
import Login from './pages/Login'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' Component={Login} />
      </Routes>
      {/* <NavBar />
      <main className='w-4/5  mx-auto'>

      </main> */}
    </>
  )
}

export default App
