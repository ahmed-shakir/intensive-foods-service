const mongoose = require("mongoose");

module.exports = function () {
  mongoose
    .connect("mongodb://localhost/intensive-foods")
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.err("Could not connect to MongoDB", err));
};
