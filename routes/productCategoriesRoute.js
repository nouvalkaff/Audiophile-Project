//? PRODUCT CATEGORIES ROUTE

const express = require("express");

const route = express.Router();

const {
 getProduct_categories,
 getIdProduct_categories,

} = require("../controller/productCategoriesController");

route.get("/", getProduct_categories);
route.get("/:id", getIdProduct_categories);

module.exports = route;
