const Category = require("../database/model/categoryModel");

exports.getCategory = async (req, res) => {
  try {
    const categories = await Category.find().select(["-__v"]).exec();

    if (!categories || categories.length === 0) {
      return res.status(204).send({
        statusCode: 204,
        statusText: "No Content",
      });
    } else {
      res.status(200).send({
        statusCode: 200,
        statusText: "OK",
        message: "Success to Get Categories",
        categories,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      statusCode: 500,
      statusText: "Internal Server Error",
    });
  }
};
