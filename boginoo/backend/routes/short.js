const express = require("express");

const {
  //     getShortById,
  //   getShortsByUser,
  //   createShort,
  //   updateShort,
  //   deleteShort,
  getShorts,
} = require("../controller/generator");

const userRouter = express.Router();

userRouter.get("/allShorts", getShorts);
