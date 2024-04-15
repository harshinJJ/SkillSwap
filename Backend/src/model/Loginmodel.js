const mongoose = require("mongoose");
const schema = mongoose.Schema;
logindata = new schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
});
var Loginmodel = mongoose.model("logindatas", logindata);
module.exports = Loginmodel;
