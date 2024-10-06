const Car = require("../models/Car");

const createComment = async (req, res) => {
  try {
    const foundCar = await Car.findById(req.params.CarId);
    if (req.body.uploadedBy === "") {
      delete req.body.uploadedBy;
    }
    foundCar.comments.push(req.body);
    await foundCar.save();
    res.redirect(`/Car/${req.params.CarId}`);
  } catch (err) {
    console.log(err);
    res.redirect(`/Car/${req.params.CarId}`);
  }
};

const deleteComment = async (req, res) => {
  try {
    const { CarId, commentId } = req.params;
    const Car = await Car.findById(CarId);
    if (!Car) {
      return res.status(404).json({ message: "Car not found" });
    }
    const commentExists = Car.comments.id(commentId);
    if (!commentExists) {
      return res.status(404).json({ message: "Comment not found" });
    }
    Car.comments.pull(commentId);
    await Car.save();
    res.redirect(`/Car/${CarId}`);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Error deleting comment", error: err.message });
  }
};

module.exports = {
  createComment,
  deleteComment,
};
