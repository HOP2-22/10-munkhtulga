const express = require("express");
const {
  createLink,
  getDatas,
  getData,
  getHistory,
} = require("../controller/URL");

const boginoo = express.Router();

boginoo.post("/create", createLink);
boginoo.get("/datas", getDatas);
boginoo.post("/history/:page/:limit", getHistory);
boginoo.post("/data", getData);

// localhost:300/url/history/:page/:limit

module.exports = boginoo;
