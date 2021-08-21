const express = require("express");

const route = express.Router();

const {
  getAllCustomer,
  getCustomerID,
} = require("../controller/customerController");

route.get("/all", getAllCustomer);
route.get("/:id", getCustomerID);

module.exports = route;
