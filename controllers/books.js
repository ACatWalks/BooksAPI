const books = require('express').Router()
const Book = require('../models/books.js')

//SEED
books.get('/seed', (req, res) => {
    Book.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
      },
      {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
      },
      {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
      },
      {
        "title": "W∀RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
      }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})

//INDEX 
books.get('/', async (req, res) => {
    try{
        const foundBooks = await Book.find()
        return res.status(200).json({books: foundBooks})
    } catch{
        return res.status(404).json({message: 'Error: Page Not Found'})
    } 
})

//SHOW
books.get('/:id', async (req, res) => {
    try{
        const foundBook = await Book.findById(req.params.id)
        return res.status(200).json({book: foundBook})
    } catch{
        return res.status(404).json({message: 'Error: Page Not Found'})
    }
})

//UPDATE
books.put('/:id', async (req, res) => {
    try{
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true})
        return res.status(200).json({book: updatedBook})
    } catch{
        return res.status(404).json({message: 'Error: Page Not Found'})
    }
})

//DELETE
books.delete('/:id', async (req, res) => {
    try{
        const badBook = await Book.findByIdAndDelete(req.params.id)
        return res.status(200).json({message: 'Delete was successful! You will never see it again!'})
    } catch{
        return res.status(404).json({message: 'Error: Page Not Found'})
    }
})

//POST
books.post('/', async (req, res) => {
    try{
        const newBook = await Book.create(req.body)
        const allBooks = await Book.find()
        return res.status(200).json({books: allBooks})
    } catch{
        return res.status(404).json({message: 'Error: Page Not Found'})
    }
})

module.exports = books