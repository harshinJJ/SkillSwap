const express = require("express");
const Registermodel = require("../model/Registermodel");
const jwt = require("jsonwebtoken");
const loginRouter = express.Router();

loginRouter.get("/login", async (req, res) => {
  try {
    const findexistinguser = await Registermodel.findOne({
      email: req.body.email,
    });
    if (!findexistingemail) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "user not exists",
      });
    }
    oldpassword = findexistinguser.password;
    newpassword = req.body.password;
    const crosspassword = await Bcrypt.compare(newpassword, oldpassword);
    if (!crosspassword) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "incorrect password",
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
