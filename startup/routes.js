const express = require("express");
const cors = require("cors");
const categories = require("../routes/categories");
const foods = require("../routes/foods");
const users = require("../routes/users");
const auth = require("../routes/auth");

module.exports = function (app) {
  app.use(express.json());
  app.use(cors());
  app.use("/api/categories", categories);
  app.use("/api/foods", foods);
  app.use("/api/users", users);
  app.use("/api/auth", auth);
};
