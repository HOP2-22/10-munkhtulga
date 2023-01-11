const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.MONGODB_URL || "6900";

const connect = async () => {
  try {
    await mongoose.connect(url);
  } catch (error) {
    console.error(error);
  }
};

module.exports = connect;
