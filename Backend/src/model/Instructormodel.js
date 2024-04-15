const mongoose = require("mongoose");
const schema = mongoose.Schema;
instructordata = new schema({
  login_id: { type: mongoose.Types.ObjectId, ref: "logindatas" },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  purpose: { type: String, required: true },
  language: { type: String, required: true },
  industry: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  photo: { type: String },
});
var Instructormodel = mongoose.model("instructordatas", instructordata);
module.exports = Instructormodel;
