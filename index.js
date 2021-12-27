const express = require("express");
const startup = require("./startup");
const app = express();

startup(app);

const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Listening on port ${port}...`));
