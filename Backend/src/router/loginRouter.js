const express = require("express");
const Bcrypt = require("bcrypt");
const Registermodel = require("../model/Registermodel");
const jwt = require("jsonwebtoken");
const loginRouter = express.Router();

loginRouter.post("/loginpart", async (req, res) => {
  try {
    const findexistinguser = await Registermodel.findOne({
      email: req.body.email,
    });
    if (!findexistinguser) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "user not exists",
      });
    }
    const token = jwt.sign(
      {
        email: findexistinguser.email,
        role: findexistinguser.role,
      },
      "secret_key_3030",
      { expiresIn: "5h" }
    );
    console.log(token);
    oldpassword = findexistinguser.password;
    newpassword = req.body.password;
    const crosspassword = await Bcrypt.compare(newpassword, oldpassword);
    if (!crosspassword) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "incorrect password",
      });
    } else {
      return res.status(200).json({
        success: true,
        error: false,
        message: "Login success",
        logindata: findexistinguser,
        token: token,
      });
    }
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
module.exports = loginRouter;
