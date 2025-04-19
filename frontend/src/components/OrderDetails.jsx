import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { useAdminContext } from "../context/adminContextProvider";

const OrderDetails = ({order, showDetails, setShowDetails }) => {
  const {updateOrderStatus,getAllOrders}=useAdminContext()
  const [status,setStatus]=useState(order?.order_status)
  const closeModel = () => {
    setShowDetails(false);
  };
  const handleUpdateStatus=(e)=>{
updateOrderStatus(order?._id,status)
closeModel()


  }
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  };

  return (
    <div className="view-profile-wrap">
      <div className="view-profile-detail-container">
        <div className="w-full flex flex-col gap-2">
          <div className="flex justify-between ">
            <h1 className="text-[22px] font-semibold">Order Details</h1>
            <p className="cursor-pointer" onClick={() => closeModel()}>
              <ImCross />
            </p>
          </div>
          <div className="flex flex-col gap-3 ml-2">
            <span className="flex gap-5 items-center">
              <p className="text-[#ffffffd7] text-[17px]">User Email : </p>
              <p className="text-[#c0c6d3]">{order?.user_email}</p>
            </span>
            <span className="flex gap-5 items-center">
              <p className="text-[#ffffffd7] text-[17px]">Order ID : </p>
              <p className="text-[#c0c6d3]">{order?.order_id}</p>
            </span>{" "}
            <span className="flex gap-5 items-center">
              <p className="text-[#ffffffd7] text-[17px]">Order Date : </p>
              <p className="text-[#c0c6d3]">{formatDate(order?.order_date)}</p>
            </span>{" "}
            <span className="flex gap-5 items-center">
              <p className="text-[#ffffffd7] text-[17px]">Tracking ID : </p>
              <p className="text-[#c0c6d3]">{order?.tracking_id}</p>
            </span>{" "}

            <span className="flex gap-2 items-center">
              <p className="text-[#ffffffd7] text-[17px]">
                Order Shipped From :
              </p>
              <p className="text-[#c0c6d3]">{order?.order_shipped_from}</p>
            </span>{" "}
            <span className="flex gap-2 items-center">
              <p className="text-[#ffffffd7] text-[17px]">Order Shipped To :</p>
              <p className="text-[#c0c6d3]">{order?.order_shipped_to}</p>
            </span>{" "}
            <span className="flex gap-2 items-center">
              <p className="text-[#ffffffd7] text-[17px]">
                Order Shipping Date :
              </p>
              <p className="text-[#c0c6d3]">{formatDate(order?.order_shipped_date)}</p>
            </span>{" "}
            <span className="flex gap-2 items-center">
              <p className="text-[#ffffffd7] text-[17px]">
                Order Delivery Date :
              </p>
              <p className="text-[#c0c6d3]">{formatDate(order?.order_delivery_date)}</p>
            </span>{" "}
            <span className="flex gap-2 items-center">
              <p className="text-[#ffffffd7] text-[17px]">Order Total :</p>
              <p className="text-[#c0c6d3]">${order?.order_total}</p>
            </span>{" "}
            <span className="flex gap-2 items-center">
              <p className="text-[#ffffffd7] text-[17px]"> Service :</p>
              <p className="text-[#c0c6d3]">{order?.shipping_service}</p>
            </span>
            <span className="flex gap-2 items-center">
              <p className="text-[#ffffffd7] text-[17px]">Item  (weight)</p>
              <p className="text-[#c0c6d3]">{order?.item} ({order.weight})</p>
            </span>
            <span className="flex justify-between">
                <span className="flex gap-2 items-center">
              <p className="text-[#ffffffd7] text-[20px]">Status :</p>
              <select   className="bg-[#283046] border border-blue-700 rounded-lg py-2 px-0 text-center flex justify-center pr-0 outline-none" value={status} onChange={(e)=>setStatus(e.target.value)}>
                <option value="" className="text-[13px]">Select</option>
                <option value="pending" className="text-[13px]">Pending</option>
                <option value="shipped" className="text-[13px]">Shipped</option>
                <option value="delivered" className="text-[13px]">Delivered</option>
                <option value="processing" className="text-[13px]">Processing</option>

              </select>
              </span>
              <span>
                <button className="bg-blue-700 text-white px-4 py-2 border-none rounded-lg" onClick={()=>handleUpdateStatus()}>Update</button>
                </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
