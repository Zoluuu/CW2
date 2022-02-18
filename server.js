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
let db;
MongoClient.connect('mongodb+srv://zon:KJPLiUgd8XDqSgql@cluster0.yeioy.mongodb.net/CourseAssignment?retryWrites=true&w=majority', (err, client) => {
    db = client.db('CourseAssignment');;
    console.log("db connected")
})


// dispaly a message for root path to show that API is working
app.get('/', (req, res, next) => {
    res.send('Select a collection, e.g., /collection/messages')
})