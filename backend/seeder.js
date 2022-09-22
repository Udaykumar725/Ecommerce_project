const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("colors");
const products = require("./data/Products");
const Users = require("./data/Users");
const user = require("./model/UserModel");
const Product = require("./model/productModel");
const Order = require("./model/orderModel");
const connectDB = require("./config/config");

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await user.deleteMany();

    const createUser = await user.insertMany(Users);
    const adminUser = createUser[0]._id;
    const sampleData = products.map((product) => {
      return { ...product, User: adminUser };
    });

    await Product.insertMany(sampleData);

    console.log(`Data Imported`.green.inverse);
    process.exit();
  } catch (error) {
    console.log(`Error: ${error.message}`.green.inverse);
    process.exit(1);
  }
};

const dataDestroy = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await user.deleteMany();
    console.log(`Data Destroyed`.red.inverse);
    process.exit();
  } catch (error) {
    console.log(`Error: ${error.message}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  dataDestroy();
} else {
  importData();
}
