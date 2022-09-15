const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const cors = require("cors");

const errorHandler = require("./errors/errorHandler")
const devicesRouter = require("./devices/devices.router");

const app = express();

app.options('*', cors())
app.use(cors());
app.use(express.json());

app.use("/", devicesRouter);

app.use((req, res, next) => {
  next({ status: 404, message: `Path not found ${req.originalUrl}` })
});
app.use(errorHandler);

module.exports = app;