const mongoose = require("mongoose");
const schema = mongoose.Schema;
const registerdata = new schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  number: { type: String, required: true },
  role: { type: String, required: true },
});

var Registermodel = mongoose.model("userdetails", registerdata);
module.exports = Registermodel;
