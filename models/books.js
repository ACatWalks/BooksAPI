const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: {type: String, required: true}, 
    description: String,
    year: {type: Number, required: true},
    quantity: {type: Number, required: true},
    imageURL: String
})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book