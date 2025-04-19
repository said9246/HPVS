import React, { useState } from "react";
import "./components.css";
import { FaEye } from "react-icons/fa";
import OrderDetails from "./OrderDetails";

const UserTable = ({ allOrders, isDashboard }) => {
const [showDetails, setShowDetails] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const handleEyeIconClick = (order) => {
    setSelectedOrder(order);
    setShowDetails(true);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  };

  return (
    <>
      <div className="Table ">
        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Tracking ID</th>
                <th>Order Date</th>
                <th>Delivery Date</th>
                <th>Shipping Service</th>
                <th>Status</th>
                {isDashboard && <th>Action</th>}
              </tr>
            </thead>

            <tbody>
              {allOrders?.allOrders.length > 0 ? (
                allOrders?.allOrders.map((order) => {
                  return (
                    <>

                    <tr key={order.order_id}>
                      <td>{order.order_id}</td>
                      <td>{order.tracking_id}</td>
                      <td>{formatDate(order.order_date)}</td>
                      <td>{formatDate(order.order_delivery_date)}</td>
                      <td>{order.shipping_service}</td>
                      <td className={order.order_status}>{order.order_status}</td>
                      {isDashboard && (
                        <td>
                          <FaEye
                            className="eyeIcon bg-green-600 text-4xl rounded-lg py-1 px-2 text-white cursor-pointer"
                            onClick={() => handleEyeIconClick(order)}
                          />
                        </td>
                      )}
                    </tr>
                    <br />
                    </>

                  );
                })
              ) : (
                <>
                  <tr className="w-80 bg-black text-center">
                    <td className="mx-auto ">
                      <h1 className="text-center mx-auto">No Orders Found</h1>
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showDetails && selectedOrder && (
        <OrderDetails
          order={selectedOrder}
          showDetails={showDetails}
          setShowDetails={setShowDetails}
        />
      )}
    </>
  );
}

export default UserTable