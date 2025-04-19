import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar'
import About from './pages/About/About'
import Location from './pages/Locations/Location'
import Contact from './pages/ContactUs/Contact'
import Services from './pages/Services/Services'
import Track from './pages/Track/Track'
import Shipping from './pages/Shipping/Shipping'
import Storage from './pages/Storage/Storage'
import Footer from './components/Footer'
import Login from './pages/Login/Login'
import toast, { Toaster } from 'react-hot-toast';
import "./App.css"
import Dashboard from './pages/Dashboard/Dashboard'
import { useAdminContext } from './context/adminContextProvider'

const App = () => {
  const {setAdmin,admin}=useAdminContext()
  const navigate=useNavigate()
  useEffect(() => {
const isUserExist=localStorage.getItem('admin')
if(isUserExist){
  setAdmin(true)

}else{
  setAdmin(false)
}
  }, [admin,setAdmin,navigate])
  return (
    <>

<Navbar/>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/location" element={<Location />} />
  <Route path="/contact" element={<Contact />} />
  <Route path='/services' element={<Services />} />
  <Route path='/track' element={<Track />} />
  <Route path='/shipping' element={<Shipping />} />
  <Route path='/storage' element={<Storage/>}/>
  <Route path='/login' element={<Login/>}/>

  <Route path='/dashboard' element={<Dashboard/>}/>

</Routes>

<Footer/>
<Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    style: {
      background: '#416dcc',
      color: '#fff',
      fontFamily:"Poppins",
      fontSize:"14px"

    },

    // Default options for specific types
    success: {
      duration: 3000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/>
    </>
  )
}

export default App