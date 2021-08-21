//! PRODUCT DETAIL CONTROLLER

const mongoose = require("mongoose");
const productModel = require("../database/model/productModel");

const getProduct_detail = async (req, res) => {
    try {
      const data = await productModel.find();
  
      res.send({
        statusCode: 200,
        statusText: "success",
        data,
      });
    } catch (error) {
      console.log(error);
      res.send({
        statusCode: 500,
        statusText: "fail",
        statusMessage: error,
      });
    }
  };

  const getIdProduct_detail = async (req, res) => {
    const { id: _id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.send({
        statusCode: 500,
        statusText: "fail",
        statusMessage: "Format Id invalid",
      });
    } else {
      const data = await productModel.findById(_id);
  
      if (!data) {
        return res.send({
          statusCode: 500,
          statusText: "fail",
          statusMessage: "Id not found",
        });
      } else {
        res.send({
          statusCode: 200,
          statusText: "success",
          data,
        });
      }
    }
  };

  module.exports = {
    getIdProduct_detail,
    getProduct_detail,
  };
