const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  paymentType: {
    type: String,
    enum: ["e-money", "cash-on-delivery"],
    default: "cash-on-delivery",
    required: true,
  },
  emoneyNumber: {
    type: String
  },
  emoneyPin: {
    type: String
  }
});

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
