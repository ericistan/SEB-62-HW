const jwt = require("jsonwebtoken");

//check cookie if user is signed in
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; //use this for Bruno test.
    // const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: "Unauthorized" });
  }
};
