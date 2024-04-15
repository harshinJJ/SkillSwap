const express = require("express");
const Loginmodel = require("../model/Loginmodel");
const Messagemodel = require("../model/Messagemodel");
const messageRouter = express.Router();

messageRouter.post("/meassgecontroller", async (req, res) => {
  try {
 
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: true,
      message: "internal server error",
      error: error,
      errormessage: error.message,
    });
  }
});
module.exports = messageRouter;
