import Customers from "../models/Customers.js";

export const createCustomers = async (req, res) => {
  const customer = await Customers.create({
    name: req.body.name,
    age: req.body.age,
  });
  res.json({
    status: "ok",
    msg: "new Customer profile created",
    id: customer._id,
    name: customer.name,
    age: customer.age,
  });
};

export const readCustomers = async (req, res) => {
  try {
    const allCustomers = await Customers.find();
    res.json(allCustomers);
  } catch (error) {
    console.error(error.message);
    res.status(400).send("An error has occurred");
  }
};

export const updateCustomers = async (req, res) => {
  const response = await Customers.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    age: req.body.age,
  });
  res.json({
    status: "ok",
    msg: "customer profile updated",
    id: response._id,
    name: req.body.name,
    age: req.body.age,
  });
};

export const deleteCustomers = async (req, res) => {
  const response = await Customers.findByIdAndDelete(req.params.id);
  res.json({
    status: "ok",
    msg: "customer profile deleted",
    id: response._id,
    name: response.name,
    age: response.age,
  });
};

export const readOneCustomer = async (req, res) => {
  const customer = await Customers.findById(req.params.id, {
    _id: 0,
  });

  res.json(customer);
};
