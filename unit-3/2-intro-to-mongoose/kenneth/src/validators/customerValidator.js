const validateCustomer = (req, res, next) => {
  const { name, age } = req.body;

  if (!name || typeof name !== "string") {
    return res.status(400).json({
      error: "Name is required and must be a string",
    });
  }

  if (age === undefined || typeof age !== "number") {
    return res.status(400).json({
      error: "Age is required and must be a number",
    });
  }

  next();
};

export default validateCustomer;
