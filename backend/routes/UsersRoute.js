const express = require("express");
const {
  authController,
  getUserProfile,
  registerUser,
} = require("../controllers/usersController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

//User Registration
router.route("/").post(registerUser);

//post email and password
router.post("/login", authController);
// router.get("/products",getProducts);

//get user profile private route
router.route("/profile").get(protect, getUserProfile);

module.exports = router;
