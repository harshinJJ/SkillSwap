const express = require("express");
const Registermodel = require("../model/Registermodel");
const jwt = require("jsonwebtoken");
const Loginmodel = require("../model/Loginmodel");
const loginRouter = express.Router();

loginRouter.get("/login", async (req, res) => {
  try {
    const findexistinguser = await Loginmodel.findOne({
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
  } catch (error) {}
});
module.exports = loginRouter;
