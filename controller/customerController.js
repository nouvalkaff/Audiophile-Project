const mongoose = require("mongoose");
const customerModel = require("../database/model/customerModel");

exports.getAllCustomer = async (req, res) => {
  try {
    const dataCustomer = await customerModel.find();

    res.status(200).send({
      statusCode: 200,
      statusText: "OK",
      message: "Success",
      data: dataCustomer,
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

exports.getCustomerID = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(400).send({
      statusCode: 400,
      statusText: "Bad Request",
      statusMessage: "Format ID invalid",
    });
  } else {
    const dataCustomerID = await customerModel.findById(_id);

    if (!dataCustomerID) {
      return res.status(400).send({
        statusCode: 404,
        statusText: "Not Found",
        statusMessage: "Customer ID not found",
      });
    } else {
      res.status(200).send({
        statusCode: 200,
        statusText: "OK",
        dataCustomerID,
      });
    }
  }
};
