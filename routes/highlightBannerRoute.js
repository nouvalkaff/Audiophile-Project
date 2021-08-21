const router = require("express").Router()
const { highligthProduct, bannerProduct } = require("../controller/highlightBannerController")

router.get("/highlight", highligthProduct)

router.get("/banner", bannerProduct)

module.exports = router