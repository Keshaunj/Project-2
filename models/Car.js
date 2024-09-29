const mongoose = require('mongoose')


const reviewSchema = new mongoose.Schema({
    rating: Number,
    comment: String
})


const CarSchema = new mongoose.Schema({
    name: String,
    year: Number,
    image: String,
    mileage: Number,
    review: [reviewSchema]
})

const Car = mongoose.model("Car", CarSchema)

module.exports = Car