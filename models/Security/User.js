const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const STRINGS = require("../../utils/texts");

const UserSchema = new Schema(
  {
    userName: String,
    userPassword: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", UserSchema);
