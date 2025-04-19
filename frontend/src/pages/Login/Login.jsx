import React, { useEffect } from 'react'
import "./Login.css"
import { useAdminContext } from '../../context/adminContextProvider'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate=useNavigate();
  const {loginAdmin,admin}=useAdminContext();
  const [data,setData]=React.useState({
    email:'',
    password:''
  })
  const handleChangeInput = (e) => {
    const {name,value}=e.target
    setData({...data,[name]:value})
  }
  const handleSubmit=async (e)=>{
    e.preventDefault()
    loginAdmin(data.email,data.password)
  }
  useEffect(() => {
    if(admin){
      navigate("/dashboard")
    }
  }, [admin])
  return (
    <div className='login_page'>
         <div className="bg_overlay">
        <div className="content">
          <h1 className='text-5xl font-bold tracking-wider' >Login </h1>
        </div>
      </div>
      <div className="login_container">
        <form  className='shadow-2xl'>
        <h1>Login</h1>
            <input type="text" onChange={(e)=>handleChangeInput(e)} placeholder="Email"  name="email" value={data.email}/>
            <input type="password" onChange={(e)=>handleChangeInput(e)} placeholder="Password" name='password' value={data.password}/>
            <button  className="btn" onClick={(e)=>handleSubmit(e)}>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login