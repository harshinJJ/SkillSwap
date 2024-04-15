const mongoose = require("mongoose");
const schema = mongoose.Schema;
const registerdata = new schema({
  login_id: { type: mongoose.Types.ObjectId, ref: "logindatas" },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  subscription: { type: String },
  // role: { type: String, required: true },
});

var Registermodel = mongoose.model("userdetails", registerdata);
module.exports = Registermodel;
