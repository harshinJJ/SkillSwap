const express = require("express");
const Registermodel = require("../model/Registermodel");
const multer = require("multer");
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
  upload.array("video", 1),
  // upload.fields([
  //   {
  //     name: "video",
  //     maxCount: 1,
  //   },
  //   {
  //     name: "photo",
  //     maxCount: 1,
  //   },
  // ]),

  async (req, res) => {
    try {
      console.log("body", req.body);
      console.log("files", req.files);
      // console.log("path", req.files["photo"][0].path);
      // console.log("path", req.files["video"][0].path);
      console.log("files", JSON.stringify(req.files, null, 2));

      const data = {
        title: req.body.title,
        description: req.body.description,
        instructor: req.body.instructor,
        instructor_description: req.body.instructor_description,
        duration: req.body.duration,
        skillLevel: req.body.skillLevel,
        course_outcome: req.body.course_outcome,
        category: req.body.category,
        video: req.files[0].path,
        // photo: req.files["photo"][0].path,
        // video: req.files["video"][0].path,
      };

      const coursedeatils = await Course(data).save();

      // const course = new Course(data); // Create a new Course instance
      // const courseDetails = await course.save();
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
