const bcrypt = require("bcryptjs");

const Users = [
  {
    name: " admin",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "tdt",
    email: "tdt@gmail.com",
    password: bcrypt.hashSync("09876", 10),
  },
  {
    name: "dell",
    email: "dell@gmail.com",
    password: bcrypt.hashSync("45678", 10),
  },
];

module.exports = Users;
