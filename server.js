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

// get the collection name
app.param('collectionName', (req, res, next, collectionName) => {
    // req.collection = db.collection("lesson")
    // console.log('collection name:', req.collection)
    return next()
})

// retrieve all the objects from an collection
app.get('/lesson', (req, res, next) => {
    db.collection("Lesson").find({}).toArray((e, results) => {
        if (e) return next(e)
        res.send(results)
    })

})

//adding post
app.post('/order', (req, res, next) => {
    db.collection("Order").insert(req.body, (e, results) => {
        if (e) return next(e)
        res.send(results.ops)
    })
})

// return with object id 

const ObjectID = require('mongodb').ObjectID;
app.get('/lesson/:id'
    , (req, res, next) => {
        db.collection("Lesson").findOne({ _id: new ObjectID(req.params.id) }, (e, result) => {
            if (e) return next(e)
            res.send(result)
        })
    })
    
