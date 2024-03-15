const express = require("express");
const Registermodel = require("../model/Registermodel");
const Loginmodel = require("../model/Loginmodel");
const instructorRouter = express.Router();

instructorRouter.post("/register", async (req, res) => {
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
    const logindata = {
        email : req.body.email,
        password: hashedpwd,
        role: 1,
      }
      const logindatas = await Loginmodel(logindata).save();
      const regData = {
        loginid: logindata._id,
        name: req.body.name,
        email: req.body.email,
        password: hashedpwd,
        number: req.body.number,
        skill: req.body.skill,
      };
    const savedregisterdata = await Registermodel(regData).save();
    return res.status(200).json({
      success: true,
      error: false,
      message: "Registration Successful",
      registerdetail: savedregisterdata,
    });
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

module.exports = instructorRouter;
