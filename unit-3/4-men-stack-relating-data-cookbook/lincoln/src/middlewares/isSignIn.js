import jwt from "jsonwebtoken";

export const isSignedIn = (req, res, next) => {
  if (!("authorization" in req.headers)) {
    return res.status(400).json({ status: "error", message: "no token found" });
  }
  const token = req.headers["authorization"].replace("Bearer ", ""); // removal of the word "Bearer "
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_SECRET);
      req.decoded = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ status: "error", message: "unauthorised" });
    }
  } else {
    return res.status(403).send({ status: "error", message: "missing token" });
  }
};
