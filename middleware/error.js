const {captureException} = require("@sentry/node");

module.exports = function (err, req, res, next) {
  captureException(err);
  return res.status(500).send("Something failed.", err);
};
