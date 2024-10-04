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
    console.log(foundCar); 
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
    const CarToEdit = await Car.findById(req.params.id);
    console.log(req.params.id)

    if (!CarToEdit) {
      console.log('Car ID:', req.params.id);
      return res.redirect(`/`); 
    }

    res.render("cars/edit", { Car: CarToEdit });
  } catch (error) {
    console.log("Cant find car", error);
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

   

    res.redirect(`/Car/${req.params.id}`);
  } catch (err) {
    console.log(err);
    res.redirect(`/Car/${req.params.id}`);
  }
};

// the handle for reviews
const newComment = async (req, res) => {
  try {
    const carId = req.params.id; 
    const commentContent = req.body.content; 

    await Car.findByIdAndUpdate(carId, {
      $push: { comments: { comment: commentContent } } 
    });

    res.redirect(`/Car/${carId}`); 
  } catch (error) {
    console.error(error);
    res.redirect(`/Car/${carId}`);
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
  newComment
};
