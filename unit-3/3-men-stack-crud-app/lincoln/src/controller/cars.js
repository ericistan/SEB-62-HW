import Cars from "../models/Cars.js";

export const createCars = async (req, res) => {
  const car = await Cars.create({
    brand: req.body.brand,
    model: req.body.model,
    description: req.body.description,
  });
  res.json({ status: "ok", msg: "new Car created" });
};

export const readCars = async (req, res) => {
  const allCars = await Cars.find();
  res.json(allCars);
  res.render("index");
};

export const updateCar = async (req, res) => {
  const car = await Cars.findByIdAndUpdate(req.params.id, {
    brand: req.body.brand,
    model: req.body.model,
    description: req.body.description,
  });
  res.json({ status: "ok", msg: "car data updated" });
};

export const deleteCar = async (req, res) => {
  const car = await Cars.findByIdAndDelete(req.params.id);
  res.json({ status: "ok", msg: "car data deleted" });
};

export const postCar = async (req, res) => {
  const oneCar = await Cars.findById(req.body.id, { _id: 0 });
  res.json(oneCar);
};
