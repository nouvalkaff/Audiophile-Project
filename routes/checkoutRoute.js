const express = require("express");

const route = express.Router();

const {
  create_checkout,
  getCheckoutID,
} = require("../controller/checkoutController");

route.post("/crt", create_checkout);
route.get("/:id", getCheckoutID);

module.exports = route;
