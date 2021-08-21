//? PRODUCT DETAIL ROUTE

const express = require("express");

const route = express.Router();

const {
  getProduct_detail,
  getIdProduct_detail,
} = require("../controller/productDetailController");

route.get("/", getProduct_detail);
route.get("/:id", getIdProduct_detail);

module.exports = route;
