import React, { useState } from 'react'
import { MdLocalShipping } from 'react-icons/md'
import  "./Track.css"
import { useAdminContext } from '../../context/adminContextProvider'
import Table from '../../components/Table'
import UserTable from '../../components/UserTable'
const Track = () => {
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
  return (
    <div className='tracking_page'>
    <div className="bg_overlay">
        <div className="content">
          
          <h1 className='text-4xl font-extrabold tracking-widest'>Track your order </h1>
        </div>
      </div>
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
          {
            trackOrder?.orders&& (
          <div className="w-[105%] "> 

          <UserTable allOrders={{allOrders:trackOrder?.orders}}/>
          </div>
        )
      }
        </div>
    </div>
  )
}

export default Track