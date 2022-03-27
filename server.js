//Basic setup
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
//const methodOverride = require('method-override')

//Middleware
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({extended: true}))
//app.use(methodOverride('_method'))
app.use(express.json())
app.use(cors())

//Important miscellaneous stuff
app.use('/books', require('./controllers/books.js'))
app.get('/', (req, res) => {
    res.send('Hello World!')
})
const MONGO_URI = 'mongodb://localhost:27017/books'
mongoose.connect(MONGO_URI)

//TODO: Add wildcard route

//Connecting to server
app.listen(process.env.PORT)