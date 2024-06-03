const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const connectDB = require("./src/connection/connection");
const cors = require("cors");
const path = require('path');


// load env variables
dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

// mongodb connection
connectDB();

app.use(cors());

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// load route
app.use("/", require("./src/router/products"));
app.use("/", require("./src/router/categories"));
app.use('/images', express.static(path.join(__dirname, 'src/images')));

// app.use('/images',express.static(path.resolve(__dirname,"/backend/src/images")));

app.listen(PORT, () =>
  console.log(`server is running on http://localhost:${PORT}`)
);
