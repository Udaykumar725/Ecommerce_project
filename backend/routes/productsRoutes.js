const express = require("express");
const {
  getProducts,
  getProduct,
} = require("../controllers/productsController");

const router = express.Router();

//GET ROUTE FOR ALL PRODUCTS
router.route("/products").get(getProducts);
// router.get("/products",getProducts);

//GET ROUTE FOR SINGLE PRODUCTS
router.route("/products/:id").get(getProduct);
// router.get("/products/:id",getProduct);

module.exports = router;
