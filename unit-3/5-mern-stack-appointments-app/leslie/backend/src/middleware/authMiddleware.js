import jwt from "jsonwebtoken";
import { getError, setError } from "../utils/appUtils.js";

const authKey = "authorization";

export const isSignedIn = (req, res, next) => {
  if (!(authKey in req.headers)) {
    return next(getError(401, "unauthorised", `No ${authKey} token found`));
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
    return next(getError(401, "unauthorised", "missing token"));
  }
};
