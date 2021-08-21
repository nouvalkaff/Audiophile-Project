const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const checkoutSchema = new Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
  },
  productId: {
    type: Array,
    ref: "Product",
  },
  quantity: {
    type: Array,
  },
  price: {
    type: Array,
  },
  total: {
    type: Number,
  },
  shipping: {
    type: Number,
    default: 50,
  },
  tax: {
    type: Number,
  },
  grandTotal: {
    type: Number,
  },
});

const Checkout = mongoose.model("Checkout", checkoutSchema);
module.exports = Checkout;
