const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();

const mongoose = require("mongoose");
const methodOverride = require("method-override");
const morgan = require("morgan");
const path = require('path');
//setting the view engine
app.set('View engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//server static files in art dir
app.use('/art', express.static(path.join(__dirname,'art')));



// Set the port from environment variable or default to 3000
const port = process.env.PORT ? process.env.PORT : "3000";

const authController = require("./controllers/auth.js");


mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// Middleware to parse URL-encoded data from forms
app.use(express.urlencoded({ extended: false }));
// Middleware for using HTTP verbs such as PUT or DELETE
app.use(methodOverride("_method"));
// Morgan for logging HTTP requests
app.use(morgan('dev'));

//GET
app.get("/", async (req, res) => {
  res.render("index.ejs");
});

app.use("/auth", authController);

// secong page/landing page
app.get('/second',(req,res)=>{
  res.render('second.ejs');
 });
 

app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`);
});
