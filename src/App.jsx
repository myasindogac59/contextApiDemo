import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className="container my-5">
        <div className="row">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
        </div>
      </div>
      <hr />
      <Footer/>
    </>
  )
}

export default App
