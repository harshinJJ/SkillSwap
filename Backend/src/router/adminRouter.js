const express = require("express");
const Registermodel = require("../model/Registermodel");
const multer = require("multer");
const Bcrypt = require("bcrypt");
const { getVideoDurationInSeconds } = require("get-video-duration");
const Course = require("../model/Coursemodel");
const adminRouter = express.Router();
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
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
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./public/image");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

const upload = multer({ storage: storage });

adminRouter.post("/register", async (req, res) => {
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
    if (req.body.password !== req.body.confirmpassword) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "wrong confirm password",
      });
    }
    const hashedpwd = await Bcrypt.hash(req.body.password, 12);
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
  upload.array("photo", 1),
  async (req, res) => {
    try {
      console.log(req.body);
      const courseOutcomeWords = req.body.courseoutcome
        .split(",")
        .map((word) => word.trim());
      const data = {
        title: req.body.title,
        description: req.body.description,
        instructor: req.body.instructor,
        instructordescription: req.body.instructordescription,
        duration: req.body.duration,
        skilllevel: req.body.skilllevel,
        courseoutcome: courseOutcomeWords,
        category: req.body.category,
        photo: req.files[0].path,
      };
      console.log(data);
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

adminRouter.post(
  "/courseuploadingvideo/:id",
  upload.single("video"),
  async (req, res) => {
    try {
      const id = req.params.id;
      const data = {
        video: req.file.path,
      };
      const coursedeatils = await Course.updateOne({ _id: id }, { $set: data });
      return res.status(200).json({
        success: true,
        error: false,
        message: "Upload Successful",
        productdetails: coursedeatils,
      });
    } catch (error) {
      console.log(error.message);
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
