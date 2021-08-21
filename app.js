require("dotenv").config();
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const bodyParser = require("body-parser");
const path = require('path')

const server = express();
const port = process.env.PORT || 3000;
require("./database/config")();

const categoryRoute = require("./routes/categoryRoute");
const highlightBannerRoute = require("./routes/highlightBannerRoute");
const productDetailRouter = require("./routes/productDetailRoute");
const productCategoriesRouter= require("./routes/productCategoriesRoute");
const checkoutRoute = require("./routes/checkoutRoute");
const customerRoute = require("./routes/customerRoute");

server.use(logger("dev"));
server.use(cors());
server.use(express.json());
server.use(
  express.urlencoded({
    extended: false,
  })
);
server.use(bodyParser.json());

server.use('/assets', express.static(path.join(__dirname, 'assets')))
server.use("/audiophile/api", categoryRoute);
server.use("/audiophile/api", highlightBannerRoute);
server.use('/api/productDetail', productDetailRouter);  
server.use('/api/productCategories', productCategoriesRouter);
server.use("/api/checkout", checkoutRoute);
server.use("/api/customer", customerRoute);

server.get("/", (req, res) => {
  res.send("Audiophile");
});

server.all("*", (req, res) => {
  res.status(404).json({
    statusText: "Not Found",
    message: "You Have Trying Reaching A Route That Doesn't Exist",
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
