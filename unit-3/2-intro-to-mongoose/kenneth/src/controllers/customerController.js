import Customer from "../models/CustomerModel.js";

// GET all customers
export const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();

    res.json(customers);
  } catch (error) {
    console.error(error.message);
    res.status(400).send("An error has occured");
  }
};

// CREATE customer
export const createCustomer = async (req, res) => {
  try {
    const newCustomer = await Customer.create({
      name: req.body.name,
      age: req.body.age,
    });

    res.json(newCustomer);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

// UPDATE customer
export const updateCustomer = async (req, res) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        age: req.body.age,
      },
      { new: true },
    );

    res.json(updatedCustomer);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

// DELETE customer
export const deleteCustomer = async (req, res) => {
  try {
    await Customer.findByIdAndDelete(req.params.id);

    res.json({
      message: "Customer deleted",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
