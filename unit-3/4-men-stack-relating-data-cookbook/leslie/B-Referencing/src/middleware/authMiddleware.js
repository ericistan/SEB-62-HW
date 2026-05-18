import jwt from "jsonwebtoken";
import { getError, setError } from "../utils/appUtils.js";

const authKey = "authorization";

export const isAuth = (req, res, next) => {
  if (!(authKey in req.headers)) {
    console.error(`No ${authKey} token found`);
    return next(getError(401, "unauthorised"));
  }

  const token = req.headers[authKey] && req.headers[authKey].split(" ").pop();
  if (token) {
    try {
      req.decoded = jwt.verify(token, process.env.ACCESS_SECRET);
      return next();
    } catch (error) {
      return next(setError(error, 401));
    }
  } else {
    console.error("missing token");
    return next(getError(401, "unauthorised"));
  }
};
