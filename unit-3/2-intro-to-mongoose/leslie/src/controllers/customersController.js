import Customers from "../models/CustomersModel.js";
import { genRandomNumber, genRandomString } from "../utils/utils.js";

export const seedCustomers = async (req, res) => {
  try {
    await Customers.deleteMany({});
    await Customers.create(
      { _id: "6a03e086d8c68b044667bca2", name: genRandomString(20), age: genRandomNumber(10, 60) },
      { _id: "6a03e086d8c68b044667bca3", name: genRandomString(20), age: genRandomNumber(10, 60) },
      { _id: "6a03e086d8c68b044667bca4", name: genRandomString(20), age: genRandomNumber(10, 60) },
      { _id: "6a03e086d8c68b044667bca5", name: genRandomString(20), age: genRandomNumber(10, 60) },
    );

    res.json({ status: "ok", msg: "seeding successful" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "seeding error" });
  }
};

export const getCustomers = async (req, res) => {
  try {
    const response = await Customers.find();
    res.json(response);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "An error has occured" });
  }
};

export const createCustomer = async (req, res) => {
  try {
    await Customers.create({
      name: req.body.name,
      age: req.body.age,
    });

    res.json({ status: "ok", msg: "customer succussfully added" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "An error has occured" });
  }
};

export const postCustomers = async (req, res) => {
  try {
    const customers = await Customers.findById(req.body.id);
    res.json(customers);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "An error has occured" });
  }
};

export const patchCustomer = async (req, res) => {
  try {
    await Customers.findByIdAndUpdate(req.body.id, { name: req.body.name, age: req.body.age });
    res.json({ status: "ok", msg: "customer succussfully patched" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "An error has occured" });
  }
};
