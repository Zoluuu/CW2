// Import dependencies modules:
const express = require('express')
const cors = require('cors');
let dbCollection = null
// const bodyParser = require('body-parser')

// Create an Express.js instance:
const app = express()

// config Express.js

app.use(cors())
app.use(express.json())
app.set('port', 3000)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})

// connect to MongoDB
const MongoClient = require('mongodb').MongoClient;