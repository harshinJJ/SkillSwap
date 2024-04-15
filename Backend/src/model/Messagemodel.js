// models/Message.js
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const messageSchema = new schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "logindatas",
    required: true,
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "logindatas",
    required: true,
  },
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

var Messagemodel = mongoose.model("messagedata", messageSchema);
module.exports = Messagemodel;
