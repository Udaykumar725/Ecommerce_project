const express = require("express");
require("colors");
const products = require("./data/Products");
const dotenv = require("dotenv");
const connectDB = require("./config/config");
const productsRoutes = require("./routes/productsRoutes");
const usersRoutes = require("./routes/UsersRoute");

dotenv.config();
connectDB();
const app = express();
// Middleware bodyparser
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Server Side</h1>");
});

app.use("/api", productsRoutes);
app.use("/api/users", usersRoutes);
const PORT = 5000;
app.listen(process.env.PORT || PORT, () => {
  console.log(
    `Server Running in ${process.env.MODE_ENV} Mode on port ${PORT}`.rainbow
  );
});
