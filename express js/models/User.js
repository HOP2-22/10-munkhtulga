const mongoose = require("mongoose");
const model = mongoose.model;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: { type: String },
  age: { type: Number },
});

const User = model("users", UserSchema);
module.exports = User;