const express = require("express");
const Registermodel = require("../model/Registermodel");
const multer = require("multer");
const Bcrypt = require("bcrypt");
const { getVideoDurationInSeconds } = require("get-video-duration");
const Course = require("../model/Coursemodel");
const adminRouter = express.Router();
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const Loginmodel = require("../model/Loginmodel");
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
const storagevideo = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "skillswap",
    resource_type: "video",
  },
});

const upload = multer({ storage: storage });
const uploadvideo = multer({ storage: storagevideo });

adminRouter.post("/register", async (req, res) => {
  try {
    console.log(req.body);
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
    const reglogindata = {
      name: req.body.name,
      email: req.body.email,
      password: hashedpwd,
      role: 0,
    };
    logindata = await Loginmodel(reglogindata).save();
    const regData = {
      login_id: logindata._id,
      name: req.body.name,
      email: req.body.email,
      password: hashedpwd,
      subscription: 0,
    };
    const savedregisterdata = await Registermodel(regData).save();
    return res.status(200).json({
      success: true,
      error: false,
      message: "Registration Successful",
      registerdetail: savedregisterdata,
      logindetails: logindata,
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

// adminRouter.post(
//   "/corsedetailsuploading",
//   upload.array("photo", 1),
//   async (req, res) => {
//     try {
//       console.log(req.body);
//       const courseOutcomeWords = req.body.courseoutcome
//         .split(",")
//         .map((word) => word.trim());
//       const data = {
//         title: req.body.title,
//         description: req.body.description,
//         instructor: req.body.instructor,
//         instructordescription: req.body.instructordescription,
//         duration: req.body.duration,
//         skilllevel: req.body.skilllevel,
//         courseoutcome: courseOutcomeWords,
//         category: req.body.category,
//         photo: req.files[0].path,
//       };
//       console.log(data);
//       const coursedeatils = await Course(data).save();
//       return res.status(200).json({
//         success: true,
//         error: false,
//         message: "Upload Successful",
//         productdetails: coursedeatils,
//       });
//     } catch (error) {
//       return res.status(500).json({
//         success: false,
//         error: true,
//         message: "internal server error",
//         error: error,
//         errormessage: error.message,
//       });
//     }
//   }
// );

adminRouter.post(
  "/corsedetailsuploading",
  upload.single("photo"),
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
        photo: req.file.path,
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
        message: "Internal server error",
        error: error,
        errormessage: error.message,
      });
    }
  }
);
adminRouter.post(
  "/courseuploadingvideo/:id",
  uploadvideo.single("video"),
  async (req, res) => {
    try {
      const id = req.params.id;
      console.log(id);
      console.log(req.file);
      const previouscoursedetails = await Course.findOne({ _id: id });
      console.log(previouscoursedetails);
      const data = {
        title: previouscoursedetails.title,
        description: previouscoursedetails.description,
        instructor: previouscoursedetails.instructor,
        instructordescription: previouscoursedetails.instructordescription,
        duration: previouscoursedetails.duration,
        skilllevel: previouscoursedetails.skilllevel,
        courseoutcome: previouscoursedetails.courseoutcome,
        category: previouscoursedetails.category,
        video: req.file.path,
      };
      console.log(data);
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
adminRouter.get("/coursedetails/:category", async (req, res) => {
  try {
    const category = req.params.category;
    console.log(category);
    const findcourse = await Course.find({ category: category });
    console.log(findcourse);
    return res.status(200).json({
      success: true,
      error: false,
      message: "Upload Successful",
      specificcourse: findcourse,
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
adminRouter.get("/specificcoursedetails/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const findspecificcourse = await Course.findOne({ _id: id });
    const relatedcourse = await Course.find({
      category: findspecificcourse.category,
    });
    console.log(relatedcourse);
    console.log(findspecificcourse);
    return res.status(200).json({
      success: true,
      error: false,
      message: "Successful",
      specificcourse: findspecificcourse,
      relatedcourse: relatedcourse,
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
adminRouter.get("/corsedetails", async (req, res) => {
  try {
    const coursedata = await Course.find();
    return res.status(200).json({
      success: true,
      error: false,
      message: "Upload Successful",
      coursedetail: coursedata,
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
adminRouter.get("/search", async (req, res) => {
  const searchTerm = req.query.term.toLowerCase();
  const results = Course.filter((courses) =>
    courses.title.toLowerCase().includes(searchTerm)
  );
  return res.status(200).json({
    success: true,
    error: false,
    message: "Upload Successful",
    coursedetail: results,
  });
});

module.exports = adminRouter;
