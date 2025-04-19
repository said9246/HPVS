import React, { useState } from 'react'
import Hero from '../../components/Hero'
import "./Home.css"
import { MdLocalShipping } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa";
import { useAdminContext } from '../../context/adminContextProvider';
import Table from '../../components/Table';
import UserTable from '../../components/UserTable';

const Home = () => {
  const [search,setSearch]=useState({
    tracking_id:'',
    order_id:'',
    user_email:'',

  })
  
  const {trackOrderByTID,trackOrder}=useAdminContext();
    
  const handleTrack=(e)=>{
    e.preventDefault()
    trackOrderByTID(search.tracking_id)
  }
  const reasons=[
    {
      heading:"Duty Free",
      details:"Enjoy tax exemptions within our secured facilities in Free Trade Zones.",

    },
    {
      heading:"Liability",
      details:"Expect full coverage for your assets, underwritten by Lloyd’s of London for up to USD 2 Billion.",

    },
    {
      heading:"Personalize",
      details:"Customizing your account to your needs, specifications and preferences",

    },
    {
      heading:"Convenience",
      details:"Delivering your Portable Safe Deposit Box to your office, residence or even hotel."
    },
    {
      heading:"Independence",
      details:"Protected against risks of political-economic crisis and financial systems, your valuables remain safely yours",

    },
    {
      heading:"Safety & Security",
      details:"We provide cutting-edge technology that fortifies and protects your most confidential assets and valuables",

    },
   
  ]
  return (
    <div className='home_page'>
     <Hero/>
      {/* Tracking components */}
      <div className="home_page_tracker py-12 flex flex-row justify-center items-center text-white">
        <div className="content">
          <h2 className='text-2xl '>Track Shipping </h2>
          <div className="custom_input flex   shadow-sm">
          <button >

          <MdLocalShipping className='text-xl'  />
          </button>
          <input type="text" placeholder='SGUxxxxxxxx' value={search.tracking_id} onChange={(e)=>setSearch({...search,tracking_id:e.target.value})}/>
          <button onClick={(e)=>handleTrack(e)}>Track</button>
          </div>
          <div className="message">
          Stay updated on your shipment!
          </div>
        </div>
        
      </div>
      {
          trackOrder?.orders&& (
          <div className=" "> 

          <UserTable allOrders={{allOrders:trackOrder?.orders}}/>
          </div>
        )
      }
<div className="storage_solution">
  <h1 className='text-3xl '>SECURED STORAGE SOLUTION</h1>
  <hr  className='w-10 h-2 rounded-full border-b-2 custom_border '/>
  <p className='text-2xl font-extralight '>A seamless blend of security, integrity and storage solution.</p>
  <video  muted loop controls className="w-70px mx-auto h-80 rounded-3xl" >
          <source src="./videos/vault.mp4" type="video/mp4" />
                </video>

</div>
<div className="why_chose_us">
<div className="heading">

  <h1 className='text-3xl'>WHY CHOOSE US</h1>
  <hr  className='w-20 h-2 rounded-full border-b-2 custom_border mx-auto '/>
  <p className='text-2xl '>Our physical security services are designed to fully integrate with your requirements.</p>
</div>
<div className="reasons_container">
  {
    reasons.map((reason)=>(
     <>
     <div className="reason">
    <div className="icon">
    <FaThumbsUp />
    </div>
    <div className="deatils">
      <span>  {reason.heading}</span>
      <p>{reason.details}</p>
    </div>
  </div>
     </> 
    ))
  }
</div>
</div>
<div className="join_us py-10 bg-white text-center flex flex-col gap-5 justify-center">
  <h1 className='text-2xl'>Join the thousands that have a good story to tell</h1>
  <h4 >This is not too good to be true, make your own history and tell your story in future</h4>
  <button>Get Started</button>
</div>
    </div>
  )
}

export default Home