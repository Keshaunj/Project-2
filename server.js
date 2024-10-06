const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const CarController = require("./controllers/Car.js");
const commentsController = require("./controllers/comments.js");

const methodOverride = require("method-override");
const morgan = require("morgan");
const path = require("path");
const session = require("express-session");
// Set the port from environment variable or default to 3000
const port = process.env.PORT ? process.env.PORT : "3000";
const authController = require("./controllers/auth.js");
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});
mongoose.connection.on("error", (err) => {
  console.log(err);
});
const Car = require("./models/Car");
// configure view engine
app.set("view engine", "ejs");
// Middleware to parse URL-encoded data from forms
app.use(express.urlencoded({ extended: false }));
// Middleware for using HTTP verbs such as PUT or DELETE
app.use(methodOverride("_method"));
// Morgan for logging HTTP requests
app.use(methodOverride("_method"));
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "public")));
// new
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
//GET
app.get("/", (req, res) => {
  res.render("index.ejs", {
    user: req.session.user,
  });
});
app.get("/vip-lounge", (req, res) => {
  if (req.session.user) {
    res.send(`Welcome to the party ${req.session.user.username}.`);
  } else {
    res.send("Sorry, no guests allowed.");
  }
});
app.get("/Car/new", CarController.getNewForm);
app.get("/Car/:id", CarController.getOneCar);
app.get("/Car", CarController.getAllCars);
app.post("/Car", CarController.createCar);
app.delete("/Car/:id", CarController.deleteCar);
app.get("/Car/:CarId/edit", CarController.getEditForm);

app.use("/auth", authController);

app.put("/Car/:id", CarController.editCar); //edit route

app.post("/Car/:CarId/comments", commentsController.createComment);
app.delete("/Car/:CarId/comments/:commentId", commentsController.deleteComment);

app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`);
});