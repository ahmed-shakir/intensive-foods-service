const dotenv = require("dotenv");

module.exports = function() {
    dotenv.config();
    if(!process.env.JWT_SECRET) {
        console.error("FATAL ERROR: JWT secret not set.");
        process.exit(1);
    }
}
