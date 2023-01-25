const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  originalLink: String,
  shortLink: String,
  owner: String,
});

const Url = mongoose.model("url", Schema);
module.exports = Url;
