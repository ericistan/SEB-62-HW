import jwt from "jsonwebtoken";
import { getError, setError } from "../utils/appUtils.js";

const authKey = "authorization";

export const isAuth = (request, response, next) => {
  if (!(authKey in request.headers)) {
    console.error(`No ${authKey} token found`);
    return next(getError(401, "unauthorised"));
  }

  const token = request.headers[authKey] && request.headers[authKey].split(" ").pop();
  if (token) {
    try {
      request.decoded = jwt.verify(token, process.env.ACCESS_SECRET);
      return next();
    } catch (error) {
      return next(setError(error, 401));
    }
  } else {
    console.error("missing token");
    return next(getError(401, "unauthorised"));
  }
};
