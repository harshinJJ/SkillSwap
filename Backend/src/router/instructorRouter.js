const express = require("express");
const Registermodel = require("../model/Registermodel");
const Instructormodel = require("../model/Instructormodel");
const Bcrypt = require("bcrypt");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const Loginmodel = require("../model/Loginmodel");
const instructorRouter = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "skillswap",
    // resourse_type: "video"
  },
});

const upload = multer({ storage: storage });

instructorRouter.post(
  "/register",
  upload.array("photo", 1),
  async (req, res) => {
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
        name: req.body.name,
        email: req.body.email,
        password: hashedpwd,
        role: 1,
      };
      const logindatas = await Loginmodel(logindata).save();
      const regData = {
        loginid: logindata._id,
        name: req.body.name,
        email: req.body.email,
        password: hashedpwd,
        description: req.body.description,
        price: req.body.price,
        industry: req.body.industry,
        language: req.body.language,
        purpose: req.body.purpose,
        photo: req.files[0].path,
        subscription: 0,
      };
      const savedregisterdata = await Instructormodel(regData).save();
      return res.status(200).json({
        success: true,
        error: false,
        message: "Registration Successful",
        registerdetail: savedregisterdata,
        logindata: logindatas,
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
  }
);
instructorRouter.get("/instructordetails/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const instructordetails = await Instructormodel.findOne({
      _id: id,
    });
    return res.status(200).json({
      success: true,
      error: false,
      message: "Login success",
      instructordetail: instructordetails,
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
