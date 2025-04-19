const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  order_id: {
    type: String,
    required: true,
    unique: true,
  },
  order_date: {
    type: Date,
    default: Date.now,    
    required: true,
  },
  order_status: {
    type: String,
    required: true,
    default: "pending",
  },

  order_total: {
    type: Number,
    required: true,
  },
  order_shipping_address: {
    type: String,
    required: true,
  },

  order_billing_address: {
    type: String,
    required: true,
  },
  tracking_id: {
    type: String,
    required: true,
  },
  order_shipped_from: {
    type: String,
    required: true,
  },
  order_shipped_to: {
    type: String,
    required: true,
  },
  order_shipped_date: {
    type: Date,
    required: true,
  },
  order_delivery_date: {
    type: Date,
    required: true,
  },
  shipping_service: {
    type: String,
    required: true,
  },
  user_email:{
    type: String,
    required: true,
  },
  item:{
    type:String,

  },
  weight:{
    type:String,

  },

  
});

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
