const mongoose = require("mongoose");
const schema = mongoose.Schema;
const subdata = new schema({
  planname: { type: String, required: true },
  name1: { type: String, required: true },
  name2: { type: String, required: true },
  price: { type: String, required: true },
});
var Subscriptionmodel = mongoose.model("subscriptiondetails", subdata);
module.exports = Subscriptionmodel;
