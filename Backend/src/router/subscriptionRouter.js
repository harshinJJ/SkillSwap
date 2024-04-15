const express = require("express");
const Subscriptionmodel = require("../model/Subscriptionmodel");
const Registermodel = require("../model/Registermodel");
const subscriptionRouter = express.Router();

subscriptionRouter.post("/subdetails", async (req, res) => {
  try {
    const subdetails = {
      planname: req.body.planname,
      name1: req.body.name1,
      name2: req.body.name2,
      price: req.body.price,
    };
    subdatas = await Subscriptionmodel(subdetails).save();
    return res.status(200).json({
      success: true,
      error: false,
      message: "Registration Successful",
      subdata: subdatas,
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
subscriptionRouter.get("/subscriptiondetails", async (req, res) => {
  try {
    const subdetail = await Subscriptionmodel.find();
    return res.status(200).json({
      success: true,
      error: false,
      message: "Registration Successful",
      subdata: subdetail,
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
subscriptionRouter.get("/specificsubscriptiondetails/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const specificsubdetail = await Subscriptionmodel.findOne({ _id: id });
    console.log(specificsubdetail);
    return res.status(200).json({
      success: true,
      error: false,
      message: "Registration Successful",
      specificsubdata: specificsubdetail,
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
subscriptionRouter.post("/updatesubscription/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const updatepart = {
      planname: req.body.planname,
      name1: req.body.name1,
      name2: req.body.name2,
      price: req.body.price,
    };
    const specificsubupdating = await Subscriptionmodel.updateOne(
      { _id: id },
      { $set: updatepart }
    );
    return res.status(200).json({
      success: true,
      error: false,
      message: "Updation Successful",
      specificsubdata: specificsubupdating,
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
subscriptionRouter.post("/subscriptionidentifier/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const subuser = await Registermodel.findOne({
      login_id: id,
    });
    const data = {
      name: subuser.name,
      email: subuser.email,
      password: subuser.password,
      subscription: 1,
    };
    const updatesub = await Registermodel.updateOne(
      { login_id: id },
      { $set: data }
    );
    const updateddata = await Registermodel.findOne({ login_id: id });
    return res.status(200).json({
      success: true,
      error: false,
      message: "Updation Successful",
      updatedsubdata: updateddata,
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

module.exports = subscriptionRouter;
