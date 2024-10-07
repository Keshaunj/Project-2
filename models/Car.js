const mongoose = require('mongoose')


const commentSchema = new mongoose.Schema({
   
    comment: String
})


const CarSchema = new mongoose.Schema({
    name: String,
    year: Number,
    image: String,
    
    comments: [commentSchema]
})

const Car = mongoose.model("Car", CarSchema)

module.exports = Car