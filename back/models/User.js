const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  spotifyID: String,
  refreshToken: String,
  accessToken: String
});

const User = mongoose.model("User", UserSchema);

module.exports = User;