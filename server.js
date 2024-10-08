const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();

const mongoose = require("mongoose");
const CarController = require("./controllers/Car.js");

const methodOverride = require("method-override");
const morgan = require("morgan");
const path = require("path");

const session = require('express-session');



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


app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

app.use(methodOverride("_method"));
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, "public")));


app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);



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
app.get("/Car/:id/edit", CarController.getEditForm);
app.post('/Car/:id/comments', CarController.newComment);
app.put("/Car/:id",CarController.editCar)





app.use("/auth", authController);


app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`);
});
