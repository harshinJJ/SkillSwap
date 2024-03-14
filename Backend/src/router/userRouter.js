const express = require("express");
const Bcrypt = require("bcrypt");
const Registermodel = require("../model/Registermodel");
const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  try {
    const existingemail = await Registermodel.findOne({
      email: req.body.email,
    });
    if (existingemail) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Email already exists",
      });
    }
    if (req.body.password !== req.body.cpassword) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "wrong confirm password",
      });
    }
    const hashedpwd = await Bcrypt.hash(req.body.password, 12);
    
  } catch (error) {
    console.log(error);
  }
});
module.exports = userRouter;
