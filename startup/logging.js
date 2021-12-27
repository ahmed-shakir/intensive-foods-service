const Sentry = require("@sentry/node");
require("express-async-errors");

module.exports = function () {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    tracesSampleRate: 1.0,
  });
};
