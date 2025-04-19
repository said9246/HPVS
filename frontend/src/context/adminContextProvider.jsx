import { useContext, useState } from "react";
import { AdminContext } from "./adminContext";
import axios from "axios";
import baseUrl from "./baseUrl";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const AdminContextProvider = (props) => {
  const [admin, setAdmin] = useState(false);
  const [pendingOrders,setPendingOrders]=useState()
  const [processingOrders,setProcessingOrders]=useState()
  const [deliveredOrders,setDeliveredOrders]=useState()
  const [allOrders,setAllOrders]=useState()
  const [chartData,setChartData]=useState()
  const [allSearchOrders,setAllSearchOrders]=useState([])
  const [trackOrder,setTrackOrder]=useState()
const navigate=useNavigate();
  const loginAdmin=async (email,password)=>{
  try {
    const result=await axios.post(`${baseUrl}/loginAdmin`,{email:email,password:password}, { withCredentials: true })
    if(result.data.user){
      setAdmin(true)
      navigate("/dashboard")
      toast.success("Login Successfull")
      localStorage.setItem('admin',true)
      window.scrollTo(0,0)
    }
  } catch (error) {
    localStorage.setItem('user',false)
    console.log(error)

  }

}
axios.defaults.withCredentials = true;

// Get All pending orders 
const getPendingOrders=async ()=>{
  try {
    const result=await axios.get(`${baseUrl}/pendingOrders`, { withCredentials: true })
    setPendingOrders(result.data)
    console.log(result.data.pendingOrdersCount) 
  } catch (error) {
    console.log(error)
  }
}
// Get All processing orders
const getProcessingOrders=async ()=>{
  try {
    const result=await axios.get(`${baseUrl}/processingOrders`, { withCredentials: true })
    setProcessingOrders(result.data)
  } catch (error) {
    console.log(error)
  }
}


// Get All deliverd orders
const getDeliveredOrders=async ()=>{
  try {
    const result=await axios.get(`${baseUrl}/deliveredOrders`, { withCredentials: true })
    setDeliveredOrders(result.data)
  } catch (error) {
    console.log(error)
  }
}
// Get All Orders
const getAllOrders=async ()=>{
  try {
    const result=await axios.get(`${baseUrl}/allOrders`, { withCredentials: true })
    setAllOrders(result.data)
  } catch (error) {
    console.log(error)
  }
}
// Get orders count according to month
const getChartData=async ()=>{
  try {
    const result=await axios.get(`${baseUrl}/orders/monthly-count-with-names`, { withCredentials: true })
    setChartData(result.data)
    console.log(result.data)
  } catch (error) {
    console.log(error)
  }
}

// update the status of order 
const updateOrderStatus=async (id,order_status)=>{
  try {
    const result=await axios.put(`${baseUrl}/updateOrderStatus/${id}`,{order_status:order_status}, { withCredentials: true })
    toast.success("Order Status Updated Successfully");

    console.log(result.data)
  } catch (error) {
    console.log(error)
  }
}

// add order 
const addOrder=async (order)=>{
  try {
    const result=await axios.post(`${baseUrl}/addOrder`,order, { withCredentials: true })
    toast.success("Order Added Successfully");

    console.log(result.data)
  } catch (error) {
    console.log(error)
    if(error.response.status===409){
      toast.error("Order with same order id or tracking id already exist");
    }

  }
}
// track the order 
const trackOrderByTID=async (tracking_id)=>{
  try {
    const result=await axios.get(`${baseUrl}/searchOrder/?tracking_id=${tracking_id}`, { withCredentials: true })
    setTrackOrder(result.data)
    console.log(result.data)
  } catch (error) {
    console.log(error)
  }
}
// search orders by tracking_id or order_id or user_email passing passed from query
const searchOrder=async (search)=>{
  try {
    const result=await axios.get(`${baseUrl}/searchOrder?order_id=${search.order_id}&tracking_id=${search.tracking_id}&user_email=${search.user_email}`, { withCredentials: true })
    setAllSearchOrders(result.data)
    console.log(result.data)
  } catch (error) {
    console.log(error)
  }
}
  return (
    <AdminContext.Provider value={{ admin,loginAdmin,setAdmin,pendingOrders,getPendingOrders,getProcessingOrders,processingOrders,getAllOrders,allOrders,deliveredOrders,getDeliveredOrders,chartData,getChartData ,updateOrderStatus,addOrder,searchOrder,allSearchOrders,trackOrder,trackOrderByTID}}>
      {props.children}
    </AdminContext.Provider>
  );
}
export const useAdminContext = () => useContext(AdminContext);
export default AdminContextProvider;