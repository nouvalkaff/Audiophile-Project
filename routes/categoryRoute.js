const router = require("express").Router();
const categoryController = require("../controller/categoryController");

router.get("/categories", categoryController.getCategory);

module.exports = router;
