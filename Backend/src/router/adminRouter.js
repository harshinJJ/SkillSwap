const express = require("express");
const Registermodel = require("../model/Registermodel");
const multer = require("multer");
const Course = require("../model/Coursemodel");
const adminRouter = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/image");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

adminRouter.get("/register", async (req, res) => {
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
    const regData = {
      name: req.body.name,
      email: req.body.email,
      password: hashedpwd,
      role: 0,
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

adminRouter.post(
  "/corsedetailsuploading",
  upload.single("photo"),
  async (req, res) => {
    try {
      const data = {
        title: req.body.title,
        description: req.body.description,
        instructor: req.body.instructor,
        duration: req.body.duration,
        price: req.body.price,
        skillLevel: req.body.skillLevel,
        category: req.body.category,
        photo: req.file.filename,
      };
      const coursedeatils = await Course(data).save();
      return res.status(200).json({
        success: true,
        error: false,
        message: "Upload Successful",
        productdetails: coursedeatils,
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
module.exports = adminRouter;
