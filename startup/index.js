const initLogging = require("./logging");
const initRoutes = require("./routes");
const initConfig = require("./config");
const initValidation = require("./validation");
const initDB = require("./db");

module.exports = function (app) {
  initLogging();
  initConfig();
  initValidation();
  initRoutes(app);
  initDB();
};
