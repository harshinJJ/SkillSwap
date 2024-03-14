const express = require("express");
const userRouter = require("./src/router/userRouter");
const adminRouter = require("./src/router/adminRouter");
const instructorRouter = require("./src/router/instructorRouter");
const { default: mongoose } = require("mongoose");
const app = express();
mongoose
  .connect(
    "mongodb+srv://harshin:123@recipes.0gu8qp4.mongodb.net/skillswap?retryWrites=true&w=majority&appName=recipes"
  )
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.log("error:", error);
  });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRouter);
app.use("/instructor", instructorRouter);
app.use("/admin", adminRouter);

app.listen(8060, () => {
  console.log("server started");
});
