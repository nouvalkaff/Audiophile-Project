const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bundleSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  }
});

const Bundle = mongoose.model("Bundle", bundleSchema);
module.exports = Bundle;