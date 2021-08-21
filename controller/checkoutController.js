const mongoose = require("mongoose"),
  Checkout = require("../database/model/checkoutModel"),
  Customer = require("../database/model/customerModel"),
  Product = require("../database/model/productModel");

exports.create_checkout = async (req, res) => {
  try {
    const { name, email, phone, address, zipcode, city, country } = req.body;

    if (
      name == "" ||
      email == "" ||
      phone == "" ||
      address == "" ||
      zipcode == "" ||
      city == "" ||
      country == ""
    ) {
      res.status(400).json({
        code: 400,
        statustext: "Bad Request",
        success: false,
        message:
          "Empty collumn detected. Please fill all the provided collumns",
      });
      return;
    }

    var newCustData = await Customer.create({
      ...req.body,
    });

    var getCustId = await newCustData._id;

    var prodIdArr = [];
    let x = 1;
    do {
      let product = await Product.findOne({ code: req.body["prodCode" + x] });
      prodId = product._id;
      prodIdArr.push(prodId);
      x++;
    } while (
      req.body["prodCode" + x] != null ||
      req.body["prodCode" + x] != undefined
    );

    var qtyArr = [];
    let y = 1;
    do {
      let qty = await req.body["quantity" + y];
      qtyArr.push(qty);
      y++;
    } while (
      req.body["quantity" + y] != null ||
      req.body["quantity" + y] != undefined
    );

    var priceArr = [];
    let z = 1;
    do {
      let getProd = await Product.findOne({ code: req.body["prodCode" + z] });
      prodPrice = getProd.price;
      priceArr.push(prodPrice);
      z++;
    } while (
      req.body["prodCode" + z] != null ||
      req.body["prodCode" + z] != undefined
    );

    var productName = [];
    let a = 1;
    do {
      let getProd = await Product.findOne({ code: req.body["prodCode" + a] });
      prodName = getProd.name;
      productName.push(prodName);
      a++;
    } while (
      req.body["prodCode" + a] != null ||
      req.body["prodCode" + a] != undefined
    );

    var productCode = [];
    let b = 1;
    do {
      let getProd = await Product.findOne({ code: req.body["prodCode" + b] });
      codeProd = getProd.code;
      productCode.push(codeProd);
      b++;
    } while (
      req.body["prodCode" + b] != null ||
      req.body["prodCode" + b] != undefined
    );

    var productImage = [];
    let c = 1;
    do {
      let getProd = await Product.findOne({ code: req.body["prodCode" + c] });
      codeImg = getProd.image;
      productImage.push(codeImg);
      c++;
    } while (
      req.body["prodCode" + c] != null ||
      req.body["prodCode" + c] != undefined
    );

    var d = 0,
      sum = [];

    do {
      count = parseInt(qtyArr[d]) * parseInt(priceArr[d]);
      d++;
      sum.push(count);
    } while (d < qtyArr.length);

    var total = sum.reduce((a, b) => a + b, 0),
      shipping = 50,
      tax = Math.round(total * 0.2),
      grandTotal = total + tax + shipping;

    var newCheckoutData = await Checkout.create({
      total: total,
      shipping: shipping,
      tax: tax,
      grandTotal: grandTotal,
      customerId: getCustId,
      productId: prodIdArr,
      quantity: qtyArr,
      price: priceArr,
    });

    return res.status(200).json({
      statusCode: 200,
      statusText: "OK",
      message: "Success",
      customer: newCustData,
      checkoutData: { productName, productCode, productImage, newCheckoutData },
    });
  } catch (error) {
    console.log(error);
    return res.status(409).json({
      statusCode: 409,
      statusText: "Conflict",
      message: "Input Customer Checkout Data Failed",
    });
  }
};

exports.getCheckoutID = async (req, res) => {
  try {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(500).send({
        statusCode: 500,
        statusText: "Internal Server Error",
        statusMessage: "Invalid ID format",
      });
    }
    const dataCheckout = await Checkout.findById(_id);

    if (!dataCheckout) {
      return res.status(404).send({
        statusCode: 500,
        statusText: "Not Found",
        message: "ID not found",
      });
    }

    res.status(200).send({
      statusCode: 200,
      statusText: "OK",
      message: "Success",
      data: dataCheckout,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      statusCode: 500,
      statusText: "Internal Server Error",
      statusMessage: error,
    });
  }
};
