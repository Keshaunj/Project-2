const Car = require("../models/Car");

const getAllCars = async (req, res) => {
  try {
    const allCars = await Car.find();
    console.log(allCars)
    res.render("cars/index", { Car: allCars, message: "Hi there" });
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
};

const getOneCar = async (req, res) => {
  try {
    const foundCar = await Car.findById(req.params.id);
    // findOne -> await Car.findOne({name: req.params.name})
    // const variable = await Model.findById()
    const contextData = { Car: foundCar };
    res.render("cars/show", contextData);
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
};

const getNewForm = (req, res) => {
  res.render("cars/new");
};

const createCar = async (req, res) => {
  if (req.body.isRead) {
    req.body.isRead = true;
  } else {
    req.body.isRead = false;
  }

  try {
    await Car.create(req.body);
    res.redirect("/Car"); // redirect -> GET / address provided 
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteCar = async (req, res) => {
  try {
    await Car.findByIdAndDelete(req.params.id);
    // console.log(deletedCar, "response from db after deletion");
    res.redirect("/Car");
  } catch (err) {
    console.log(err);
    res.redirect(`/`);
  }
};

const getEditForm = async (req, res) => {
  try {
    const CarToEdit = await Car.findById(req.params.CarId);
    res.render("cars/edit", { Car: CarToEdit });
  } catch (err) {
    console.log(err);
    res.redirect(`/`);
  }
};

const editCar = async (req, res) => {
  try {
    // console.log(req.body, 'testing data from form')

    if (req.body.isRead === "on") {
      req.body.isRead = true;
    } else {
      req.body.isRead = false;
    }

    await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });

    // findByIdAndUpdate - breakdown of arguments:
    // 1. id - the resource _id property for looking the document
    // 2. req.body - data from the form
    // 3. {new: true} option is provided as an optional third argument

    res.redirect(`/Car/${req.params.id}`);
  } catch (err) {
    console.log(err);
    res.redirect(`/Car/${req.params.id}`);
  }
};

module.exports = {
  getAllCars,
  getOneCar,
  createCar,
  deleteCar,
  editCar,
  getNewForm,
  getEditForm,
};