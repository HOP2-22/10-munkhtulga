const mongoose = require("mongoose");

const shortModel = mongoose.Schema({
  orignalLink: {
    type: String,
    required: true,
  },
  shortLink: {
    type: String,
    unique: true,
    required: true,
  },
  ownerId: {
    type: String,
    // required: true,
  },
});

const shorts = mongoose.model("history", shortModel);

module.exports = shorts;
