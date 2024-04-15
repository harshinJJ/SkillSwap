const mongoose = require("mongoose");
const schema = mongoose.Schema;
const courseSchema = new schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  instructor: { type: String, required: true },
  instructordescription: { type: String, required: true },
  duration: { type: Number, required: true },
  skilllevel: { type: String, required: true },
  courseoutcome: { type: [String], required: true },
  category: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  photo: { type: String },
  video: { type: String },
});
var Course = mongoose.model("Course", courseSchema);
module.exports = Course;
