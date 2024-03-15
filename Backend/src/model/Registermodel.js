const mongoose = require("mongoose");
const schema = mongoose.Schema;
const registerdata = new schema({
  loginid: { type: mongoose.Types.ObjectId, ref: "logindatas" },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  number: { type: String, required: true },
  skill: { type: String },
});

var Registermodel = mongoose.model("userdetails", registerdata);
module.exports = Registermodel;
