const express = require("express");
require("dotenv").config();
const cors = require("cors");
const userRouter = require("./src/router/userRouter");
const adminRouter = require("./src/router/adminRouter");
const instructorRouter = require("./src/router/instructorRouter");
const { default: mongoose } = require("mongoose");
const loginRouter = require("./src/router/loginRouter");
const subscriptionRouter = require("./src/router/subscriptionRouter");
const messageRouter = require("./src/router/messageRouter");

const app = express();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.log("error:", error);
  });
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/subscription", subscriptionRouter);
app.use("/user", userRouter);
app.use("/instructor", instructorRouter);
app.use("/admin", adminRouter);
app.use("/login", loginRouter);
app.use("/message", messageRouter);

app.get("/", (req, res) => {
  res.send("server is on");
});

app.listen(process.env.PORT_NUMBER, () => {
  console.log("server started");
});

// console.log(hi);
