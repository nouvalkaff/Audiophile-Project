//! PRODUCT CATEGORIES CONTROLLER

const mongoose = require("mongoose");
const categoryModel = require("../database/model/categoryModel");

const getProduct_categories = async (req, res) => {
    try {
      const data = await categoryModel.find();
  
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

  const getIdProduct_categories = async (req, res) => {
    const { id: _id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.send({
        statusCode: 500,
        statusText: "fail",
        statusMessage: "Format Id invalid",
      });
    } else {
      const data = await categoryModel.findById(_id);
  
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
      getProduct_categories,
      getIdProduct_categories,
  };