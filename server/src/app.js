const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const cors = require("cors");

const errorHandler = require("./errors/errorHandler")
const devicesRouter = require("./devices/devices.router");

const app = express();

app.get('./allow-cors', function (req, res) {
  response.set('Access-Control-Allow-Origin', '*');
  response.sendFile(__dirname + '/message.json');
});

app.use(cors());
app.use(express.json());

app.use("/devices", devicesRouter);

app.use((req, res, next) => {
  next({ status: 404, message: `Path not found ${req.originalUrl}` })
});
app.use(errorHandler);

module.export = app;