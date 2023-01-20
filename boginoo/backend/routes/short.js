const express = require("express");

const {
  //     getShortById,
  //   getShortsByUser,
  createShort,
  //   updateShort,
  //   deleteShort,
  getShorts,
} = require("../controller/generator");

const linkRouter = express.Router();

linkRouter.get("/allShorts", getShorts);
linkRouter.post("/", createShort);
