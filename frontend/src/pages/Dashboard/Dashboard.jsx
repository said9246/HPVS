import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Chart from "react-apexcharts";
import Table from "../../components/Table";
import { MdOutlinePending } from "react-icons/md";
import { MdOutlineAutoGraph } from "react-icons/md";
import { useAdminContext } from "../../context/adminContextProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Dashboard = () => {
  const {setAdmin,admin,getPendingOrders,pendingOrders,getProcessingOrders,processingOrders,getAllOrders,allOrders,deliveredOrders,getDeliveredOrders,chartData,getChartData,addOrder,searchOrder,allSearchOrders}=useAdminContext()
  const[search,setSearch]=useState({
    order_id :'',
    tracking_id :'',
    user_email:''
  })
  const [showStorageFields, setShowStorageFields] = useState(false);
  const navigate=useNavigate()
  const [state, setState] = useState({
    user_email: "",
    order_id: "",
    order_status: "",
    order_total: "",
    tracking_id: "",
    order_shipped_from: "",
    order_shipped_to: "",
    order_shipped_date: "",
    order_delivery_date: "",
    shipping_service: "",
    weight: "",
    item: "",

  });
  const inputHandle = (e) => {
    const { name, value } = e.target;
    if (name === "shipping_service") {
      if (value === "storage") {
        setShowStorageFields(true);
      } else {
        setShowStorageFields(false);
      }
    }
    setState({
      ...state,
      [e.target.name]: e.target.value,

    });
  };

  const submit = (e) => {
    e.preventDefault();
    
    addOrder(state);
  };

  const data = {
    series: [
      {
        name: "Orders",
        data: chartData?.data,
      },
    ],
    options: {
      color: ["#181ee8", "#181ee8"],
      plotOptions: {
        radius: 10,
      },
      chart: {
        background: "#283046",
        foreColor: "#d0d2d6",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        curve: ["smooth", "straight", "stepline"],
        lineCap: "butt",
        colors: "#6960da",
        width: 2,
        dashArray: 0,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apl",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      legend: {
        position: "top",
      },
      responsive: [
        {
          breakpoint: 565,
          yaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apl",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
          },
          options: {
            plotOptions: {
              bar: {
                horizontal: true,
              },
            },
            chart: {
              height: "550px",
            },
          },
        },
      ],
    },
  };

  useEffect(() => {
const isUserExist=localStorage.getItem('admin')
if(isUserExist){
  setAdmin(true)

}else{
  setAdmin(false)
navigate("/login")
}
  }, [admin,setAdmin,navigate])
const handleLogout=(e)=>{
  e.preventDefault()
  setAdmin(false)
  localStorage.removeItem('admin')
  navigate("/login")
}
useEffect(() => {
getPendingOrders();
getProcessingOrders()
getDeliveredOrders();
getAllOrders();
getChartData()
},[])

const handleSearch=(e)=>{
  e.preventDefault()
  searchOrder(search)
  
}


  return (
    <div className="bg-[#161d31] w-[100%] h-[100%]">
      <div className="flex flex-col gap-6">
        <div className="mt-36 flex lg:fkex-row md:flex-row dashbaord_header justify-between text-white mt-20 mx-[7.9%] rounded-md bg-[#283046] py-7 px-6 items-center border-b-8  border-[#41437D] md:mb-10">
          <p className="border border-white pt-2 pb-2 pl-3 pr-3 font-bold rounded-sm tracking-[5px] text-[20px]">
            HPVS
          </p>
          <p className="text-[25px]">Dashboard</p>
          <button className="bg-white  text-black px-4 py-2 rounded-md" onClick={(e)=>handleLogout(e)}>Logout</button>
        </div>
        {/* Orders count bar */}
        <div className="w-[88%] flex flex-col p-3 ml-6 md:ml-[6%] md:p-0 gap-4 md:gap-0 md:flex-row justify-around">
          <div className="flex justify-between items-center pt-6 pb-6 pl-8 pr-8 bg-[#283046] rounded-md gap-3">
            <div className="flex flex-col justify-start items-start text-[#d0d2d6]">
              <h2 className="text-3xl font-bold">{pendingOrders?.pendingOrdersCount}</h2>
              <span className="text-md font-medium">Pending Orders</span>
            </div>
            <div className="w-[46px] h-[47px] rounded-full bg-[#e000e81f] flex justify-center items-center text-xl">
              <AiOutlineShoppingCart className="text-[#cd00e8] shadow-lg" />
            </div>
          </div>
          <div className="flex justify-between items-center pt-6 pb-6 pl-8 pr-8 bg-[#283046] rounded-md gap-3">
            <div className="flex flex-col justify-start items-start text-[#d0d2d6]">
              <h2 className="text-3xl font-bold">{processingOrders?.processingOrdersCount}</h2>
              <span className="text-md font-medium">Processing Orders</span>
            </div>
            <div className="w-[46px] h-[47px] rounded-full bg-[#e0e8001f] flex justify-center items-center text-xl">
              <AiOutlineShoppingCart className="text-[#ced036] shadow-lg" />
            </div>
          </div>
          <div className="flex justify-between items-center pt-6 pb-6 pl-8 pr-8 bg-[#283046] rounded-md gap-3">
            <div className="flex flex-col justify-start items-start text-[#d0d2d6]">
              <h2 className="text-3xl font-bold">{deliveredOrders?.deliveredOrdersCount}</h2>
              <span className="text-md font-medium">Delivered Orders</span>
            </div>
            <div className="w-[46px] h-[47px] rounded-full bg-[#28c76f1f] flex justify-center items-center text-xl">
              <AiOutlineShoppingCart className="text-[#28c76f] shadow-lg" />
            </div>
          </div>
          <div className="flex justify-between items-center pt-6 pb-6 pl-8 pr-8 bg-[#283046] rounded-md gap-3">
            <div className="flex flex-col justify-start items-start text-[#d0d2d6]">
              <h2 className="text-3xl font-bold">{allOrders?.allOrdersCount}</h2>
              <span className="text-md font-medium">Total Orders</span>
            </div>
            <div className="w-[46px] h-[47px] rounded-full bg-[#7367f01f] flex justify-center items-center text-xl">
              <AiOutlineShoppingCart className="text-[#7367f0] shadow-lg" />
            </div>
          </div>
        </div>
        {/* Chart */}
        <div className="flex flex-col md:flex-row gap-10 md:mt-4">
          <div className="w-[94%]  md:w-[53%] ml-3 md:ml-24 rounded-md">
            <Chart
              options={data.options}
              series={data.series}
              type="line"
              height={350}
            />
          </div>
          <div className="flex flex-col gap-5 mx-3 md:mx-0 md:gap-12 md:mt-4 text-[#9ca1abff]">
            <div className="flex flex-row items-center justify-between gap-6 md:gap-0 px-5 py-7 bg-[#283046] w-full md:w-[80%] md:h-[37%] rounded-lg">
            <p className="text-[58px] pr-2 text-[teal]"><MdOutlineAutoGraph /></p>
            <span className="pl-5">
            <p>
                You can add the order by providing all details for the order
              </p>
              <div className="flex justify-between">
                <span className="flex items-center">
                <p className="text-[20px] text-[#9ca1abff]">
                  Total Orders Count
                </p>
                </span>
                <p className="text-[20px] text-[#b5b5b5]">{allOrders?.allOrdersCount}</p>
              </div>
            </span>
              
             
            </div>
            <div className="flex flex-row items-center justify-between gap-6 md:gap-0 px-5 py-7 bg-[#283046] w-full md:w-[80%] md:h-[39%] rounded-lg">
                  <p className="text-[58px] pr-2 text-[magenta]"><MdOutlinePending /></p>
            <span className="pl-5">
            <p>
                 You can update the status of orders by using dashboard there are
              </p>
              <div className="flex justify-between">
                <span className="flex items-center">
                <p className="text-[20px] text-[#9ca1abff]">
                 Total Pending Orders Count
                </p>
                </span>
                <p className="text-[20px] text-[#b5b5b5]">{pendingOrders?.pendingOrdersCount}</p>
              </div>
            </span>
              
              
            </div>
          </div>
        </div>
        {/* Add order form */}
        <div className="flex flex-col bg-[#283046] p-5 mr-[7%] ml-[7%] mb-4 rounded-md add_orders">
          <p className="text-white text-[25px] flex justify-center font-medium pb-9">
            Add Orders
          </p>
          <form onSubmit={submit} className="flex flex-col gap-10 sm:justify-center">
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between px-2 md:px-10 ">
              <span className="flex flex-col gap-1">
                <label htmlFor="" className="text-white text-[13px] font-thin">
                  Add User Email
                </label>
                <input
                  id="order_id"
                  onChange={inputHandle}
                  value={state.user_email}
                  type="text"
                  placeholder="Enter user email"
                  name="user_email"
                  required
                  className=" flex justify-between border border-slate-700 items-center py-[8px] px-[14px] w- [250px]  focus:border-blue-500 rounded-md outline-none bg-transparent text-[#d0d2d6] font-thin"
                />
              </span>
              <span className="flex flex-col gap-1">
                <label htmlFor="" className="text-white text-[13px] font-thin">
                  Add Order ID
                </label>
                <input
                  id="order_id"
                  onChange={inputHandle}
                  value={state.order_id}
                  type="text"
                  placeholder="Enter order id"
                  name="order_id"
                  required
                  className=" flex justify-between border border-slate-700 items-center py-[8px] px-[14px] w-[250px] focus:border-blue-500 rounded-md outline-none bg-transparent text-[#d0d2d6] font-thin"
                />
              </span>
              <span className="flex flex-col gap-1">
                <label htmlFor="" className="text-white text-[13px] font-thin">
                  Add Order Shipping Address
                </label>
                <input
                  id="order_shipping_address"
                  onChange={inputHandle}
                  value={state.order_shipping_address}
                  type="text"
                  placeholder="Enter shipping address"
                  name="order_shipping_address"
                  required
                  className=" flex justify-between border border-slate-700 items-center py-[8px] px-[14px] w-[250px] focus:border-blue-500 rounded-md outline-none bg-transparent text-[#d0d2d6] font-thin"
                />
              </span>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between px-2 md:px-10">
              <span className="flex flex-col gap-1">
                <label htmlFor="" className="text-white text-[13px] font-thin">
                  Add Tracking ID
                </label>
                <input
                  id="tracking_id"
                  onChange={inputHandle}
                  value={state.tracking_id}
                  type="text"
                  placeholder="Enter tracking id"
                  name="tracking_id"
                  required
                  className=" flex justify-between border border-slate-700 items-center py-[8px] px-[14px] w-[250px] focus:border-blue-500 rounded-md outline-none bg-transparent text-[#d0d2d6] font-thin"
                />
              </span>
              <span className="flex flex-col gap-1">
                <label htmlFor="" className="text-white text-[13px] font-thin">
                  Enter  Service
                </label>
                <select
                  id="shipping_service"
                  onChange={inputHandle}
                  value={state.shipping_service}
                  type="text"
                  placeholder="Enter shipping service"
                  name="shipping_service"
                  required
                  className=" flex justify-between border border-slate-700 items-center py-[8px] px-[14px] w-[250px] focus:border-blue-500 rounded-md outline-none bg-transparent text-[#d0d2d6] font-thin"
                >
<option value="shipping" style={{color:"black"}}>Shipping</option>
<option value="storage" style={{color:"black"}}>Storage</option>
                </select>
              </span>
              <span className="flex flex-col gap-1">
                <label htmlFor="" className="text-white text-[13px] font-thin">
                  Add Order Billing Address
                </label>
                <input
                  id="order_billing_address"
                  onChange={inputHandle}
                  value={state.order_billing_address}
                  type="text"
                  placeholder="Enter Order billing address"
                  name="order_billing_address"
                  required
                  className=" flex justify-between border border-slate-700 items-center py-[8px] px-[14px] w-[250px] focus:border-blue-500 rounded-md outline-none bg-transparent text-[#d0d2d6] font-thin"
                />
              </span>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between px-2 md:px-10">
              <span className="flex flex-col gap-1">
                <label htmlFor="" className="text-white text-[13px] font-thin">
                  Order Shipped From
                </label>
                <input
                  id="order_shipped_from"
                  onChange={inputHandle}
                  value={state.order_shipped_from}
                  type="text"
                  placeholder="Enter shipped from"
                  name="order_shipped_from"
                  required
                  className=" flex justify-between border border-slate-700 items-center py-[8px] px-[14px] w-[250px] focus:border-blue-500 rounded-md outline-none bg-transparent text-[#d0d2d6] font-thin"
                />
              </span>
              <span className="flex flex-col gap-1">
                <label htmlFor="" className="text-white text-[13px] font-thin">
                  Order Shipped To
                </label>
                <input
                  id="order_shipped_to"
                  onChange={inputHandle}
                  value={state.order_shipped_to}
                  type="text"
                  placeholder="Enter order shipped to"
                  name="order_shipped_to"
                  required
                  className=" flex justify-between border border-slate-700 items-center py-[8px] px-[14px] w-[250px] focus:border-blue-500 rounded-md outline-none bg-transparent text-[#d0d2d6] font-thin"
                />
              </span>
              <span className="flex flex-col gap-1">
                <label htmlFor="" className="text-white text-[13px] font-thin">
                  Add Order Shipping Date
                </label>
                <input
                  id="order_shipping_date"
                  onChange={inputHandle}
                  value={state.order_shipped_date}
                  type="date"
                  placeholder="Enter Order shipping date"
                  name="order_shipped_date"
                  required
                  className=" flex justify-between border border-slate-700 items-center py-[8px] px-[14px] w-[250px] focus:border-blue-500 rounded-md outline-none bg-transparent text-[#d0d2d6] font-thin"
                />
              </span>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between px-2 md:px-10">
              <span className="flex flex-col gap-1">
                <label htmlFor="" className="text-white text-[13px] font-thin">
                  Order Delivery Date
                </label>
                <input
                  id="order_delivery_date"
                  onChange={inputHandle}
                  value={state.order_delivery_date}
                  type="date"
                  placeholder="Enter delivery date"
                  name="order_delivery_date"
                  required
                  className=" flex justify-between border border-slate-700 items-center py-[8px] px-[14px] w-[250px] focus:border-blue-500 rounded-md outline-none bg-transparent text-[#d0d2d6] font-thin"
                />
              </span>
              <span className="flex flex-col gap-1">
                <label htmlFor="" className="text-white text-[13px] font-thin">
                  Enter Order Total
                </label>
                <input
                  id="order_total"
                  onChange={inputHandle}
                  value={state.order_total}
                  type="number"
                  placeholder="Enter order total"
                  name="order_total"
                  required
                  className=" flex justify-between border border-slate-700 items-center py-[8px] px-[14px] w-[250px] focus:border-blue-500 rounded-md outline-none bg-transparent text-[#d0d2d6] font-thin"
                />
              </span>
              <span className="flex flex-col gap-1">
                <label htmlFor="" className="text-white text-[13px] font-thin">
                  Add Order Status
                </label>
                <input
                  id="order_status"
                  onChange={inputHandle}
                  value={state.order_status}
                  type="text"
                  placeholder="Enter Order status"
                  name="order_status"
                  required
                  className=" flex justify-between border border-slate-700 items-center py-[8px] px-[14px] w-[250px] focus:border-blue-500 rounded-md outline-none bg-transparent text-[#d0d2d6] font-thin"
                />
              </span>
              
            </div>

            {showStorageFields && (
              <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between px-2 md:px-10">
                <span className="flex flex-col gap-1">
                  <label htmlFor="" className="text-white text-[13px] font-thin">
                    Add Item
                  </label>
                  <input
                    id="item"
                    onChange={(e) => inputHandle(e)}
                    value={state.item}
                    type="text"
                    placeholder="Enter item"
                    name="item"
                    required
                    className="flex justify-between border border-slate-700 items-center py-[8px] px-[14px] w-[250px] focus:border-blue-500 rounded-md outline-none bg-transparent text-[#d0d2d6] font-thin"
                  />
                </span>
                <span className="flex flex-col gap-1">
                  <label htmlFor="" className="text-white text-[13px] font-thin">
                    Add Weight
                  </label>
                  <input
                    id="weight"
                    onChange={(e) => inputHandle(e)}
                    value={state.weight}
                    type="text"
                    placeholder="Enter weight"
                    name="weight"
                    required
                    className="flex justify-between border border-slate-700 items-center py-[8px] px-[14px] w-[250px] focus:border-blue-500 rounded-md outline-none bg-transparent text-[#d0d2d6] font-thin"
                  />
                </span>
              </div>
            )}

            <div className="flex flex-col md:flex-row gap-0 md:gap-[7rem]  items-center md:px-10">
             
              <span className="mt-5">
                <button className="bg-blue-700 px-14 py-3 text-white border-blue-700 rounded-lg shadow-blue-900 hover:bg-blue-800">
                  Add Order
                </button>
              </span>
            </div>
          </form>
        </div>
        <h1 className="text-4xl mx-auto text-white">Order History</h1>
        <Table  allOrders={allOrders} isDashboard={true}/>
        <h1 className="text-4xl mx-auto text-white mt-40">Search Your Order</h1>




        <span className="bg-[#283046] w-[86%] ml-[7%] rounded-lg px-10 py-5 mb-48 search_orders">
        <p className="text-white text-[22px] mb-3  ">Search Order</p>
        <span>
          <form onSubmit={(e)=>handleSearch(e)} className="flex flex-col md:flex-row gap-5">
            <input
              id="order_id"
              type="text"
              placeholder="Enter Order ID"
              name="order_id"
              onChange={(e)=>setSearch({...search,order_id:e.target.value})}
              value={search.order_id}
              className=" flex justify-between border border-slate-700 items-center py-[8px] px-[14px] w-[250px] focus:border-blue-500 rounded-md outline-none bg-transparent text-[#d0d2d6] font-thin"
            />
            <input
              id="tracking_id"
              type="text"
              placeholder="Enter Tracking ID"
              name="tracking_id"
              onChange={(e)=>setSearch({...search,tracking_id:e.target.value})}
              value={search.tracking_id}
              className=" flex justify-between border border-slate-700 items-center py-[8px] px-[14px] w-[250px] focus:border-blue-500 rounded-md outline-none bg-transparent text-[#d0d2d6] font-thin"
            />
            <input
              id="user_email"
              type="text"
              placeholder="Enter User Email"
              name="user_email"
              onChange={(e)=>setSearch({...search,user_email:e.target.value})}
              value={search.user_email}
              className=" flex justify-between border border-slate-700 items-center py-[8px] px-[14px] w-[250px] focus:border-blue-500 rounded-md outline-none bg-transparent text-[#d0d2d6] font-thin"
            />
            <button className="bg-blue-700 px-7 py-1 text-white border-blue-700 rounded-lg shadow-blue-900 hover:bg-blue-800">
              Search Order
            </button>
          </form>
        </span>
        {
        allSearchOrders?.orders&& (
          <div className="w-[105%] "> 

          <Table allOrders={{allOrders:allSearchOrders?.orders}} isDashboard={true}/>
          </div>
        )
      }
      </span>
     

      </div>
    </div>
  );
};

export default Dashboard;
