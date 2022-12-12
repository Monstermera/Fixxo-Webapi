require('dotenv').config()

const port = process.env.PORT || 8000
const mongoDB = require('./mongodb-index')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

// middleware
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

// routes
const productsController = require('./controllers/productsController')
app.use('/api/products', productsController)

// initialize
mongoDB()
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))
