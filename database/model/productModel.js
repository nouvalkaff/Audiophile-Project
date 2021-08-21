const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  flag_new: {
    type: Boolean,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  bundle_id: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bundle",
    required: true,
  }],
  feature_image: {
    type: Array,
    required: true,
  }
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;