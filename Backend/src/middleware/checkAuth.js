const jwt = require("jsonwebtoken");
module.export = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedtoken = jwt.verify(token, "secret_key_3030");
    req.userData = {
      email: decodedtoken.email,
      role: decodedtoken.role,
    };
    next();
  } catch (error) {
    res.status(401).json({
      succes: false,
      error: true,
      message: "authentication failed",
    });
  }
};
